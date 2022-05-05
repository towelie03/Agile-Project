import { MongoClient } from "mongodb";
const data_base = new MongoClient();

const pass = encodeURIComponent("P@ssw0rd")
const con_string = `mongodb+srv://admin:${pass}@agile.ja8u2.mongodb.net/tester?retryWrites=true&w=majority`;

const cred = [ {'admin': 'pwd'}]
const client = data_base(con_string);

export default data_base;
