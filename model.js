import Mongoose from 'mongoose'

const GameSchema = Mongoose.Schema({
  name: String,
  description: String,
  min_players: Number,
  max_player: Number
})

const Game = Mongoose.model('Game', GameSchema)

export default Game
