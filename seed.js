import mongoSeeding from 'mongo-seeding'
const { Seeder } = mongoSeeding

const config = {
  database: `${process.env.MONGODB_URI}/${process.env.DB_NAME}`,
  dropCollections: true
}
const seeder = new Seeder(config)

const games = {
  name: 'games',
  documents: [
    {
      name: 'Kings',
      description: 'kings',
      min_players: 6
    },
    {
      name: 'Horse race',
      description: 'race',
      min_players: 5
    },
    {
      name: 'Red, black, high low',
      description: 'Red, black, low',
      min_players: 9
    }
  ]
}
export default () => {
  seeder.import([games]).then(() => {
    console.log('seeded!')
    // Do whatever you want after successful import
  })
}
