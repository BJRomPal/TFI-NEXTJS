import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

let cachedClient = null
let cachedDb = null

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}


export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  const client = await MongoClient.connect(uri, {
    maxPoolSize:50,
    wtimeoutMS:2500,
  })

  const db = await client.db('hogarDB')

  cachedClient = client
  cachedDb = db

  return { client, db }
}
