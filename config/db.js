import { MongoClient } from "mongodb";
const data_base = MongoClient;

const pass = encodeURIComponent("P@ssw0rd")

const con_string = `mongodb+srv://admin:${pass}@agile.ja8u2.mongodb.net/tester?retryWrites=true&w=majority`;


data_base.connect(con_string, function(err, db) {

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

export default data_base;
