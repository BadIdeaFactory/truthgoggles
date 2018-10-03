import models from '../../models'

// Get credible content by ID
export async function getById(parentValue, { id }) {
  return models.CredibleContent.findOne({ where: { id } })
}

// Get all credible contents
export async function getAll(parentValue, { scrape_status }) {
  return models.CredibleContent.findAll({
    where: {
      scrape_status: scrape_status
    },
  })
}

// Create credible content
export async function create(parentValue, {
  baseUrl,
  title,
  author,
  publication,
  body,
  scrapeStatus,
}) {
  return models.CredibleContent.create({
    baseUrl,
    title,
    author,
    publication,
    body,
    scrapeStatus,
  })
}

// Delete credible content
export async function remove(parentValue, { id }) {
  return models.CredibleContent.destroy({ where: { id } })
}
