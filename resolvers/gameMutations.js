import GameModel from '../model.js'

const createGame = async (root, args, ctx) => {
  try {
    return await GameModel.create(args.input)
  } catch (error) {
    throw new Error(error)
  }
}
const updateGame = (root, args, ctx) => {}
const deleteGame = () => {}

export { createGame, updateGame, deleteGame }
