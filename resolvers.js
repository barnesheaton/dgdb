const resolveFunctions = {
  RootQuery: {
    game(_, { name }, ctx) {
      const game = new ctx.constructor.Game()
      return game.findGame(name)
    }
  }
}

module.exports = resolveFunctions
