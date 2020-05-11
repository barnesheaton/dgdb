import GraphQLJSON from 'graphql-type-json'
import * as gameQueries from './gameQueries.js'
import * as gameMutations from './gameMutations.js'

const resolveFunctions = {
  JSON: GraphQLJSON,
  Query: {
    ...gameQueries
  },
  Mutation: {
    ...gameMutations
  }
}

export default resolveFunctions
