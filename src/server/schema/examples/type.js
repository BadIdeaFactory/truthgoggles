import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Example type
const ExampleType = new GraphQLObjectType({
  name: 'example',
  description: '...',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
})

export default ExampleType
