// const mongoose = require('mongoose');

const pass = encodeURIComponent("P@ssw0rd")

const con_string = `mongodb+srv://admin:${pass}@agile.ja8u2.mongodb.net/tester?retryWrites=true&w=majority`;

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(con_string, function(err, db) {

    const acc = db.db().admin();
    acc.listDatabases(async function(err, result) {
    try{    
        console.log(result.databases);
        db.close();
    }
    catch (err){
        console.error(err)
    }
    });
  });


// const MongoClient = mongoose.connect(con_string, {useNewUrlParser: true})

// mongoose.connection.on("error", function(error) {
//   console.log(error)
// })

// mongoose.connection.on("open", function() {
//   console.log("Connected to MongoDB database.")
// })

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

//     async function main(){

    // const pass = encodeURIComponent("P@ssw0rd")

    // const con_string = `mongodb+srv://admin:${pass}@agile.ja8u2.mongodb.net/tester?retryWrites=true&w=majority`;
//     const { MongoClient } = require("mongodb");
//     const client = new MongoClient(con_string)

//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();

//         // Make the appropriate DB calls
//         await  listDatabases(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }


//     main().catch(console.error);
// }


// const mongoose = require('mongoose')

// const connectionParams={
//     useNewUrlParser: true,
//     useUnifiedTopology: true 
// }
// let client = mongoose.connect(con_string,connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })


// test.insert([{  name: 'bob',
//     email: 'bob@bob.com',
//     username :'admin',
//     password : 'pwd',
//  }, 
// {   name: 'john',
//     email: 'john@john.com',
//     username:'root', 
//     password: 'p@ssword' 
// }, 
// {   name: 'jamal',
//     email: 'jamal@jamal.com',
//     username:'sam',
//     password: 'abc' 
// }, 
// {   name: 'steve',
//     email: 'steve@steve.com',
//     username:'bob',
//     password: 'xyz' 
// }])
