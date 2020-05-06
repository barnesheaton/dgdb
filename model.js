const Mongoose = require('mongoose')

const GameSchema = Mongoose.Schema({
  name: String,
  description: String,
  players: Number,
  new: String
})

const Game = Mongoose.model('Game', GameSchema)

module.exports = Game
