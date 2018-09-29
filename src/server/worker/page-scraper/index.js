import dotenv from 'dotenv'
import rp from 'request-promise'
import cheerio from 'cheerio'
import url from 'url'

import models from '../../models'

dotenv.config()

/**
 * Scrape the next unscraped fact check
 */
async function scrapeNext() {
  const credibleContent = await getNextUnscrapedCrediblecontent()
  credibleContent.scrape_status = models.CredibleContent.ScrapeStatuses.PROCESSING
  credibleContent.save()
  const html = await rp({
    url: credibleContent.base_url,
  })
  const $ = cheerio.load(html)
  const domain = url.parse(credibleContent.base_url).hostname
  console.log(credibleContent.base_url)
  if (domain.search('factcheck.org') !== -1) {
    const parsedContent = parseFactCheck($)
    credibleContent.publication = "FactCheck.org"
    credibleContent.body = parsedContent.body
    credibleContent.title = parsedContent.title
  }
  if (domain.search('politifact.com') !== -1) {
    const parsedContent = parsePolitiFact($)
    credibleContent.publication = "PolitiFact"
    credibleContent.body = parsedContent.body
    credibleContent.title = parsedContent.title
  }
  if (domain.search('washingtonpost.com') !== -1) {
    const parsedContent = parseWashingtonPost($)
    credibleContent.publication = "Washington Post"
    credibleContent.body = parsedContent.body
    credibleContent.title = parsedContent.title
  }

  if (credibleContent.text != "") {
    credibleContent.scrape_status = models.CredibleContent.ScrapeStatuses.FINISHED
  } else {
    credibleContent.scrape_status = models.CredibleContent.ScrapeStatuses.ERROR
  }
  credibleContent.save()
}

function parsePolitiFact($) {
  return {
    title: $(".statement__text").text(),
    body: $(".article__text").text(),
  }
}
function parseFactCheck($) {
  return {
    title: "",
    body: $(".entry-content").text(),
  }
}
function parseWashingtonPost($) {
  return {
    title: $(".topper-headline").text(),
    body: $("article").text(),
  }
}

async function getNextUnscrapedCrediblecontent() {
  return (await models.CredibleContent.findAll({
    where: {
      scrape_status: models.CredibleContent.ScrapeStatuses.PENDING
    },
    order: [['createdAt', 'DESC']]
  }))[0]
}

export default scrapeNext
