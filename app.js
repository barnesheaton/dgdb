const express = require('express')
const Mongoose = require('mongoose')
var createError = require('http-errors')
var path = require('path')
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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

const server = new ApolloServer({ typeDefs: Schema, resolvers: Resolvers })

server.applyMiddleware({ app })

app.listen(process.env.PORT || 8080, () => {
  console.log(process.env.url)
  console.log(
    `GraphQL Server is now running on http://localhost:${process.env.PORT ||
      8080}/graphql`
  )
})
