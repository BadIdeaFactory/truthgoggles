import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

const CredibleContentType = new GraphQLObjectType({
  name: 'credibleContent',
  description: 'A piece of credible content that we want to give a Truth Goggles treatment to.',

  fields: () => ({
    id: { type: GraphQLInt },
    base_url: { type: GraphQLString },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    publication: { type: GraphQLString },
    body: { type: GraphQLString },
    scrape_status: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
})

export default CredibleContentType
