import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import CredibleContentType from '../type'
import { getAll, getById } from '../resolvers'

export const credibleContents = {
  type: new GraphQLList(CredibleContentType),
  resolve: getAll,
}

// Credible Content By ID
export const credibleContent = {
  type: CredibleContentType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: getById,
}
