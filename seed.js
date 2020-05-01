const request = require('request-promise');
const Game = require('./model');

const seed = () => {
  const games = [
    {
      name: 'One',
      description: 'one',
      players: 1,
    },
    {
      name: 'Two',
      description: 'two',
      players: 2,
    },
    {
      name: 'Three',
      description: 'three',
      players: 3,
    }
  ];

  games.forEach((game) => {
    const game = new Game(game);
    game.save((err, item) => {
      console.log('saved:', item);
    });
  });
};

module.exports = seed;