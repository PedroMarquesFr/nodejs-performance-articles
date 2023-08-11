const MongoClient = require('mongodb').MongoClient;

async function streamResults() {
  const client = await MongoClient.connect('mongodb://localhost:8000/test');
  const collection = client.db().collection('test');
  const cursor = collection.find({});
  cursor.stream().pipe(process.stdout);
}

streamResults().catch(console.error);