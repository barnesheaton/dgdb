const express = require('express')
const Mongoose = require('mongoose')

const PORT = 8080
const app = express()
const { ApolloServer } = require('apollo-server-express')

Mongoose.Promise = global.Promise
Mongoose.connect('mongodb://localhost/apollo', err => {
  if (err) {
    return err
  }
  return true
})

const seed = require('./seed')

// seed()

const Schema = require('./schema')
const Resolvers = require('./resolvers')
// const Connectors = require('./connectors')

const server = new ApolloServer({ typeDefs: Schema, resolvers: Resolvers })

server.applyMiddleware({ app })

app.listen(PORT, () =>
  console.log(
    `GraphQL Server is now running on http://localhost:${PORT}/graphql`
  )
)
