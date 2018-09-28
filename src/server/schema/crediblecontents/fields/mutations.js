import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import CredibleContentType from '../type'
import { create, remove } from '../resolvers'

// Example create
export const credibleContentCreate = {
  type: CredibleContentType,
  args: {
    baseUrl: {
      name: 'baseUrl',
      type: GraphQLString,
    },
    title: {
      name: 'title',
      type: GraphQLString,
    },
    author: {
      name: 'author',
      type: GraphQLString,
    },
    publication: {
      name: 'publication',
      type: GraphQLString,
    },
    body: {
      name: 'body',
      type: GraphQLString,
    },
  },
  resolve: create,
}

// Example remove
export const credibleContentRemove = {
  type: CredibleContentType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt,
    },
  },
  resolve: remove,
}
