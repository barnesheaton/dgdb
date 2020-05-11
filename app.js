import mongoose from 'mongoose'

import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import graphqlImport from 'graphql-import'
const { importSchema } = graphqlImport
import apollo from 'apollo-server-express'
const { ApolloServer } = apollo

const typeDefs = importSchema('graphql/index.graphql')
import resolvers from './resolvers.js'

import seed from './seed.js'

// Connect to the DB
mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  dbName: process.env.DB_NAME
})

mongoose.connection.on('open', () => {
  console.log('Connected to mongo server.')
  seed()
})

mongoose.connection.on('error', function(err) {
  console.log('Could not connect to mongo server!')
  return console.log(err)
})

// Start the express server
const app = express()
app.use(logger('dev'))
app.use(cookieParser())

// Initialize the Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

server.applyMiddleware({ app })

app.listen(process.env.PORT, () => {
  console.log(
    `GraphQL Server is now running on ${process.env.APP_URL ||
      'http://localhost'}:${process.env.PORT}/graphql`
  )
})
