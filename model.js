import Mongoose from 'mongoose'

const GameSchema = Mongoose.Schema({
  name: String,
  description: String,
  minPlayers: Number,
  maxPLayer: Number
})

const Game = Mongoose.model('Game', GameSchema)

export default Game
