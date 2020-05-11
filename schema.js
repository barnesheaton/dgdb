const typeDefinitions = `
type Game {
  name: String
  description: String
  players: Int
}

type RootQuery {
  game(name: String, description: String, players: Int): Game
  games: [Game]
}

schema {
  query: RootQuery
}
`

export default typeDefinitions
