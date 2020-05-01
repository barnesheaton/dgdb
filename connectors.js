const GameModel = require('./model');

class Game {
  constructor() {
    this.findGame = (name) => {
      const person = GameModel.findOne({
        name
      }, (error, data) => {
        return data;
      });
      return game;
    };
  }
}

module.exports = {
  Game
};