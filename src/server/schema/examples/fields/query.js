import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import ExampleType from '../type'
import { getAll, getById } from '../resolvers'

export const examples = {
  type: new GraphQLList(ExampleType),
  resolve: getAll,
}

// Example By ID
export const example = {
  type: ExampleType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getById,
}
