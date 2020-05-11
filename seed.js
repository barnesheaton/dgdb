import mongoSeeding from 'mongo-seeding'
const { Seeder } = mongoSeeding

const config = {
  database: process.env.MONGODB_URI,
  dropCollections: true
}
const seeder = new Seeder(config)

const games = {
  name: 'games',
  documents: [
    {
      name: 'Kings',
      description: 'kings',
      min_players: 2,
      max_players: 10
    },
    {
      name: 'Horse race',
      description: 'race',
      min_players: 2,
      max_players: 8
    },
    {
      name: 'Red, black, high low',
      description: 'Red, black, low',
      min_players: 2,
      max_players: 8
    }
  ]
}

export default () => {
  seeder.import([games]).then(() => {
    console.log('seeded!')
  })
}
