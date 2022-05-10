import mongoose from "mongoose";
import app from '../index.js'
import { config } from "dotenv";
config({ path: process.ENV })

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,
	{
		useNewUrlParser:true
	}).then(() => console.log("Connected to DB Successfully")
	).catch(err => console.log(err));	



