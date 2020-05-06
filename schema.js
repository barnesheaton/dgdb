const typeDefinitions = `
type Game {
  name: String
  description: String
  players: Number
}

type RootQuery {
  game(name: String, description: String, players: Number): Game
}

schema {
  query: RootQuery
}
`

module.exports = [typeDefinitions]
