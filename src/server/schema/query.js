import { GraphQLObjectType } from 'graphql'

// App Imports
import * as credibleContent from './crediblecontents/fields/query'

// Compile into a single export
const query = new GraphQLObjectType({
  name: 'query',
  description: '...',

  fields: {
    ...credibleContent,
  },
})

export default query
