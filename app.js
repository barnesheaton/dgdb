import express from 'express'
const DB_PASSWORD = 'iTN6ghSsnQzqITI2'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import mongoose from 'mongoose'
import apollo from 'apollo-server-express'
const { ApolloServer } = apollo

var dev_db_url = `mongodb+srv://barnes:${DB_PASSWORD}@cluster0-rus8x.mongodb.net/test?retryWrites=true&w=majority&authSource=admin`
var mongoDB = process.env.MONGODB_URI || dev_db_url
mongoose.connect(mongoDB, { useNewUrlParser: true, dbName: 'dgdb' })

import seed from './seed.js'
seed()

import Schema from './schema.js'
import Resolvers from './resolvers.js'

const app = express()
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
