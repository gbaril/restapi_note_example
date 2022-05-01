const {MongoMemoryServer} = require('mongodb-memory-server')
const {MongoClient} = require('mongodb')

let db = null

async function startDb() {
  const mongo = await MongoMemoryServer.create()
  const mongoDBURL = mongo.getUri()
  const connection = await MongoClient.connect(mongoDBURL, {useNewUrlParser: true})
  db = connection.db()
}

async function getDb() {
  if (!db) await startDb()
  return db
}

module.exports = getDb