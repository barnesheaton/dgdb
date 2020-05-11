import GraphQLJSON from 'graphql-type-json'
import * as gameResolvers from './game.js'

console.log(gameResolvers)

const resolveFunctions = {
  JSON: GraphQLJSON,
  RootQuery: {
    ...gameResolvers
  }
}

export default resolveFunctions
