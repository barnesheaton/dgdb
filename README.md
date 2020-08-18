### Mongood Express GraphQL API

Express is a minimalist web framework built for Node.js. This repository uses the [apollo-server-express](https://github.com/apollographql/apollo-server#readme) node package to create a GraphQL server that connects to a Mongo DB.

To run locally

1. Make sure you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
2. And also the [MongoDB Community edition](https://docs.mongodb.com/manual/administration/install-community/)
3. Enter the mongo shell `mongo` and create a database named apollo `use apollo`
3. Run `heroku local serve` in another terminal
4. visit http://localhost:[PORT]/graphql
