import { MongoClient } from "mongodb";

const pass = encodeURIComponent("P@ssw0rd")
const con_string = `mongodb+srv://admin:${pass}@agile.ja8u2.mongodb.net/tester?retryWrites=true&w=majority`;

const cred = [ {'admin': 'pwd'}]
const client = new MongoClient(con_string);

export default data_base
