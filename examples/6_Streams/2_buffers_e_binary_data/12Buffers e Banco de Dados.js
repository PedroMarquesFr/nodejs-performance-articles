const { MongoClient } = require('mongodb');

async function run() {
  const client = new MongoClient('mongodb://localhost:8000');
  await client.connect();

  const db = client.db('test');
  const collection = db.collection('buffers');

  const buffer = Buffer.from('hello');

  await collection.insertOne({ buffer });

  client.close();
}

run().catch(console.dir);