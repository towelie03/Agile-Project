<<<<<<< HEAD
const mongoose = require('mongoose');

const url = "mongodb+srv://admin:P@ssw0rd@agile.ja8u2.mongodb.net/Agile?retryWrites=true&w=majority";

const connectionParams={
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
};

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
=======
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:P@ssw0rd@agile.ja8u2.mongodb.net/Agile?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
>>>>>>> 061927ef446283ff0efd398feb388575ef53e276
