var MongoClient = require('mongodb').MongoClient

var data = require("./data.js").data

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("butterfly");
database.dropDatabase()
database = client.db("butterfly");
const butterflies = database.collection("butterflies");
const result = await butterflies.insertOne({name:"Greta Oto"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()