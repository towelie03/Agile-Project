const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:<P@ssw0rd>@agile.ja8u2.mongodb.net/Agile?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});