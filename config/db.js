// const mongoose = require('mongoose');

const pass = encodeURIComponent("P@ssw0rd")

const con_string = `mongodb+srv://admin:${pass}@agile.ja8u2.mongodb.net/tester?retryWrites=true&w=majority`;

/* const client = mongoose.connect(con_string, {useNewUrlParser: true})

 mongoose.connection.on("error", function(error) {
   console.log(error)
 })

 mongoose.connection.on("open", function() {
   console.log("Connected to MongoDB database.")
})*/

import { MongoClient } from "mongodb";
const cred = [ {'admin': 'pwd'}]


const client = new MongoClient(con_string);
/*async function run() {
  try {
    await client.connect();
    const database = client.db("tester");
    const test = database.test;
    // create a document to insert
    await test.insertOne(cred);
        console.log(`A document was inserted with the _id: ${new_cred.insertedId}`)
;
  } finally {
    await client.close();
  }
}
run().catch(console.dir)*/

export default db;
