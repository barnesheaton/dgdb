const Game = require('./model')

const seed = () => {
  const games = [
    {
      name: 'One',
      description: 'one',
      players: 1
    },
    {
      name: 'Two',
      description: 'two',
      players: 2
    },
    {
      name: 'Three',
      description: 'three',
      players: 3
    }
  ]

  games.forEach(game => {
    const newGame = new Game(game)
    newGame.save((err, item) => {
      console.log('saved: ', item)
    })
  })
}

module.exports = seed
