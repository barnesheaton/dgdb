const GameModel = require('./model')

class Game {
  constructor() {
    this.findGame = name => {
      const game = GameModel.findOne({ name }, (error, data) => {
        return data
      })
      return game
    }
  }
}

module.exports = {
  Game
}
