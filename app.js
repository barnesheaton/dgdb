const express = require('express')
const Mongoose = require('mongoose')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

const app = express()
const { ApolloServer } = require('apollo-server-express')

Mongoose.Promise = global.Promise
Mongoose.connect('mongodb://localhost/apollo', err => {
  if (err) {
    return err
  }
  return true
})

// const seed = require('./seed')
// seed()

const Schema = require('./schema')
const Resolvers = require('./resolvers')
// const Connectors = require('./connectors')

app.use(logger('dev'))
app.use(cookieParser())

const server = new ApolloServer({ typeDefs: Schema, resolvers: Resolvers })

server.applyMiddleware({ app })

app.listen(process.env.PORT || 8080, () => {
  console.log(process.env.url)
  console.log(
    `GraphQL Server is now running on http://localhost:${process.env.PORT ||
      8080}/graphql`
  )
})
