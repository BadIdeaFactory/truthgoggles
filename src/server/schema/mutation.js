import { GraphQLObjectType } from 'graphql'

// App Imports
import * as credibleContent from './crediblecontents/fields/mutations'

// Compile into a single export
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: '...',

  fields: {
    ...credibleContent,
  },
})

export default mutation
