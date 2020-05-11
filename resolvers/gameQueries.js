import GameModel from '../model.js'

const getGames = (_, args, ctx) => {
  return GameModel.find({ ...args.filter }, (error, data) => {
    return data
  })
}

const getGame = (_, args, ctx) => {
  return GameModel.findById(args.id, (error, data) => {
    return data
  })
}

export { getGame, getGames }
