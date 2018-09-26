import { GraphQLObjectType } from 'graphql'

// App Imports
import * as example from './examples/fields/mutations'

// Compile into a single export
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
    ...example,
  },
})

export default mutation
