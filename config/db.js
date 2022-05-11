import mongoose from "mongoose";
import app from '../index.js'
import { config } from "dotenv";
config({ path: process.ENV })

const db = mongoose
const uri = process.env.ATLAS_URI;
db.connect(uri,
	{
		useNewUrlParser:true
	}).then(() => console.log("Connected to DB Successfully")
	).catch(err => console.log(err));

export default db


// this is for testing and use on my laptop in case the .env import dosent work
/*const uri = ('mongodb+srv://admin:Password@agile.ja7u2.mongodb.net/users?retryWrites=true&w=majority');
db.connect(uri,
	{
		useNewUrlParser:true
	}).then(() => console.log("Connected to DB Successfully")
	).catch(err => console.log(err));

export default db*/





