import {MongoClient} from "mongodb";
import { config } from "dotenv";
import mongoose from "mongoose";
config({ path: process.ENV })

// let db_name;

const uri = "mongodb+srv://admin:Password@agile.ja8u2.mongodb.net/tester?retryWrites=true&w=majority/";

const mongo = new MongoClient(uri, {useNewUrlParser: true})

// mongoose.connect(uri, { useNewUrlParser: true });

// const connected = mongoose.connection;

// connected.on("connected", () => {console.log(`Connected to ${connected.name} BABYY`)})

// connected.on("error", () => {console.error.bind(`Error: ${console}`)})

// const connected = mongoose.connect(uri, {useNewUrlParser: true});

// connected.then((client) => {
//     client.
// })
// let db = client.connect(err => {
//   const collection = client.db("users").collection("usernames");
//   // perform actions on the collection object
//   console.log(`Connected to ${collection.collectionName}`)
//   client.close();
// }); 

function insertDB(obj){
	client.connect(err => {
		const collection = client.db("users").collection("usernames");
		// perform actions on the collection object
		collection.insertOne(obj)
		client.close()	
	}
	)
}

//  function insertDB(obj) {
//   try {
// 	client.connect();
//     const users = client.db("users");
//     const usernames = database.collection("usernames");
//     const result = usernames.insertOne(JSON.stringify(obj));
//     console.log(`A document was inserted`);
//   } finally {
//     client.close();
//   }
// };

export default { mongo, insertDB };





