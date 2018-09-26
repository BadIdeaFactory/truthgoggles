import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import ExampleType from '../type'
import { create, remove } from '../resolvers'

// Example create
export const exampleCreate = {
  type: ExampleType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString,
    },

    description: {
      name: 'description',
      type: GraphQLString,
    },
  },
  resolve: create,
}

// Example remove
export const exampleRemove = {
  type: ExampleType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt,
    },
  },
  resolve: remove,
}
