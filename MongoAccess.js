"use strict"

const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');

const credentials = './Server/Creds.pem'

const client = new MongoClient('mongodb+srv://cluster0.4nvoo.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1
});

async function testRun() {
  try {
    await client.connect();
    const database = client.db("testDB");
    const collection = database.collection("testCol");
    const docCount = await collection.countDocuments({});
    console.log(docCount);
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

testRun().catch(console.dir);
