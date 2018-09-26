import { GraphQLObjectType } from 'graphql'

// App Imports
import * as example from './examples/fields/query'

// Compile into a single export
const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: {
    ...example,
  },
})

export default query
