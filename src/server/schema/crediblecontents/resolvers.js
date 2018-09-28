import models from '../../models'

// Get credible content by ID
export async function getById(parentValue, { id }) {
  return models.CredibleContent.findOne({ where: { id } })
}

// Get all credible contents
export async function getAll() {
  return models.CredibleContent.findAll()
}

// Create credible content
export async function create(parentValue, {
  baseUrl,
  title,
  author,
  publication,
  body,
}) {
  return models.CredibleContent.create({
    baseUrl,
    title,
    author,
    publication,
    body,
  })
}

// Delete credible content
export async function remove(parentValue, { id }) {
  return models.CredibleContent.destroy({ where: { id } })
}
