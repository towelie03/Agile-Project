import {MongoClient} from "mongodb";
import { config } from "dotenv";
config({ path: process.ENV })


const uri = "mongodb+srv://admin:Password@agile.ja8u2.mongodb.net/users?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

// client.connect(err => {
//   const collection = client.db("users").collection("usernames");
//   // perform actions on the collection object
//   console.log(`Connected to ${collection.collectionName}`)
//   client.close();
// }); 

// function insertDB(obj){
// 	client.connect(err => {
// 		const collection = client.db("users").collection("usernames");
// 		// perform actions on the collection object
// 		collection.insertOne(JSON.stringify(obj))
// 		client.close()	
// 	}
// 	)
// }

 function insertDB(obj) {
  try {
	client.connect();
    const users = client.db("users");
    const usernames = database.collection("usernames");
    const result = usernames.insertOne(JSON.stringify(obj));
    console.log(`A document was inserted`);
  } finally {
    client.close();
  }
};

export default {client, insertDB};





