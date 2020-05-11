import Mongoose from 'mongoose'

const GameSchema = Mongoose.Schema({
  id: String,
  name: String,
  description: String,
  minPlayers: Number,
  maxPLayer: Number
})

const Game = Mongoose.model('Game', GameSchema)

export default Game
