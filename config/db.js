import mongoose from "mongoose";
import app from '../index.js'
import dotenv from 'dotenv';
import User from '../models/userModel.js';
dotenv.config()

mongoose.Promise = global.Promise
const MONGODB_URI = process.env.uri
mongoose.connect(MONGODB_URI);

app.post("/signup", async (req, res) => {
	const { username, password  } = req.body
	const user = new User({username, password})
	const ret = await user.save()
	res.json(ret)
})


