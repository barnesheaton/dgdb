import GameModel from '../model.js'

const createGame = async (root, args, ctx) => {
  try {
    return await GameModel.create(args.input)
  } catch (error) {
    throw new Error(error)
  }
}
const updateGame = (root, args, ctx) => {
  return GameModel.findByIdAndUpdate(
    args.id,
    args.input,
    { new: true, returnOriginal: false },
    (err, game) => {
      if (err) {
        return new Error(err)
      } else if (!game) {
        return new Error('Could not find the requested Game')
      } else {
        return game
      }
    }
  )
}

const deleteGame = () => {}

export { createGame, updateGame, deleteGame }
