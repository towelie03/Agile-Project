import express from 'express';
import bp from 'body-parser';
import path from 'path';
import {User}  from './models/userModel.js';
import connected  from './config/db.js';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';


const uri = "mongodb+srv://admin:Password@agile.ja8u2.mongodb.net/tester?retryWrites=true";
// const uri = 'mongodb://localhost:27017/tester'
mongoose.connect(uri)

const app = express();

const router = express.Router();
const __dirname = path.resolve();

app.use("/", router);

app.use(bp.json());

app.use(bp.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "templates")))

router
	.route("/")
	.get((req, res) => {
		res.sendFile(path.join(__dirname + "/templates/index.html"));
	})

router
	.route("/about")
	.get((req, res) => {
		res.sendFile(path.join(__dirname + "/templates/about.html"));
	})

router
	.route("/story")
	.get((req, res) => {
		res.sendFile(path.join(__dirname + "/templates/story.html"));
	})

router
	.route("/login")
	.get((req, res) => {
		res.sendFile(path.join(__dirname + "/templates/login.html"));
	})

router
	.route("/signup")
	.get((req, res) => {
		res.sendFile(path.join(__dirname + "/templates/signup.html"));
	})

router
	.route("/logged-in")
	.post(bp.urlencoded({extended: true}),async (req, res) => {
		const body = req.body
		const user = await new User(body);
		await user.save()
		console.log(body)
		res.redirect("/login")
	})
app.get("/timers", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/timers.html"))
})

export default app; router;

