const Game = require('./model')

const seed = () => {
  const games = [
    {
      name: 'Kings',
      description: 'kings',
      players: 6
    },
    {
      name: 'Horse race',
      description: 'race',
      players: 5
    },
    {
      name: 'Red, black, high low',
      description: 'Red, black, low',
      players: 9
    }
  ]

  games.forEach(game => {
    const newGame = new Game(game)
    newGame.findOneAndUpdate(
      game.name,
      { $set: { ...game } },
      { upsert: true },
      (err, item) => {
        console.log('saved: ', item)
      }
    )
  })
}

module.exports = seed
