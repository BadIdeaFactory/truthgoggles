import models from '../../models'

// Get examples by ID
export async function getById(parentValue, { id }) {
  return models.Example.findOne({ where: { id } })
}

// Get all examples
export async function getAll() {
  return models.Example.findAll()
}

// Create example
export async function create(parentValue, { name, description }) {
  return models.Example.create({
    name,
    description,
  })
}

// Delete example
export async function remove(parentValue, { id }) {
  return models.Example.destroy({ where: { id } })
}
