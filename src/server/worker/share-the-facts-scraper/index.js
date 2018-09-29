import dotenv from 'dotenv'
import rp from 'request-promise'
import models from '../../models'

dotenv.config()
const shareTheFactsApiKey = process.env.SHARE_THE_FACTS_API_KEY || ""

/**
 * Loads the latest URLs from the share the facts API
 */
async function loadNewFactCheckUrls() {
  const latestScrapeDate = await getLatestScrapeDate()
  const factCheckUrls = []
  let page = 0
  let more = true
  while (true) {
    const newUrls = await getPage(page, latestScrapeDate)
    console.log(newUrls)
    if(newUrls.length == 0) {
      break;
    }
    factCheckUrls.push(...newUrls)
    page += 1
  }
  if(factCheckUrls.length > 0) {
    // The reduce here is being used to ensure that we don't
    // try to insert the next record until after the previous
    // has been added.
    factCheckUrls.reduce(async (previousPromise, url) => {
      await previousPromise
      await findOrCreateCredibleContent(url)
    }, Promise.resolve([]))
  }
  registerScrape()
}

function registerScrape() {
  models.ScrapeLog.create({
    values: {
      scrapertype: models.ScrapeLog.ScraperTypes.SHARE_THE_FACTS
    }
  })
}

async function getLatestScrapeDate() {
  const latestScrape = await models.ScrapeLog.findAll({
    limit: 1,
    where: {},
    order: [['createdAt', 'DESC']]
  })
  if(latestScrape.length != 0)
    return new Date(latestScrape[0].createdAt)
  return new Date(0)
}

async function findOrCreateCredibleContent(url) {
  await models.CredibleContent.findOrCreate({
    where: {
      base_url: url
    },
    defaults: {
      base_url: url
    }
  })
}

async function getPage(page, cutoffDate) {
  const url = `http://bif.sharethefacts.co/api/facts?count=50&page=${page}&api_key=${shareTheFactsApiKey}`
  const result = await rp({
    url,
    json: true
  })
  return result.facts
    .filter(item => {
      const dateCreated = new Date(item.created_at)
      if(dateCreated > cutoffDate)
        return true
      return false
    })
    .map(item => item.redirectURL)
}

export default loadNewFactCheckUrls
