const GameModel = require('./model')

class Game {
  constructor() {
    this.games = () => {
      const games = GameModel.find((error, data) => {
        return data
      })
      return games
    }
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

const resolveFunctions = {
  RootQuery: {
    games() {
      const game = new Game()
      return game.games()
    },
    game(_, { name }, ctx) {
      const game = new Game()
      return game.findGame(name)
    }
  }
}

module.exports = resolveFunctions
