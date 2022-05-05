import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

mongoose.Promise = global.Promise
const MONGODB_URI = process.env.uri
const db = mongoose.connect(MONGODB_URI)

export default db;
