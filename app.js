const express = require('express')
const DB_PASSWORD = 'iTN6ghSsnQzqITI2'
var cookieParser = require('cookie-parser')
var logger = require('morgan')

const app = express()
const { ApolloServer } = require('apollo-server-express')

const MongoClient = require('mongodb').MongoClient
const uri =
  process.env.MONGODB_URI ||
  `mongodb+srv://barnes:${DB_PASSWORD}@cluster0-rus8x.mongodb.net/test?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect(() => {
  const db = client.db('games')
  db.on('error', console.error.bind(console, 'MongoDB connection error:'))
  // perform actions on the collection object
  client.close()
})

const seed = require('./seed')
seed()

const Schema = require('./schema')
const Resolvers = require('./resolvers')

app.use(logger('dev'))
app.use(cookieParser())

const server = new ApolloServer({
  typeDefs: Schema,
  resolvers: Resolvers,
  introspection: true,
  playground: true
})

server.applyMiddleware({ app })

app.listen(process.env.PORT || 8080, () => {
  console.log(
    `GraphQL Server is now running on http://localhost:${process.env.PORT ||
      8080}/graphql`
  )
})
