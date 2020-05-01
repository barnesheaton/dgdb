const resolveFunctions = {
  RootQuery: {
    game(_, {
      name
    }, ctx) {
      const president = new ctx.constructor.Game();
      return game.findGame(name);
    },
  },
};

module.exports = resolveFunctions;