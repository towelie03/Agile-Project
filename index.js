import express from 'express';
import bp from 'body-parser';
import path from 'path';
import {User}  from './models/userModel.js';
import connected  from './config/db.js';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs'
import Jwt from 'jsonwebtoken';

const uri = "mongodb+srv://admin:Password@agile.ja8u2.mongodb.net/tester?retryWrites=true";
// const uri = 'mongodb://localhost:27017/tester'
mongoose.connect(uri)

const app = express();

const router = express.Router();
const __dirname = path.resolve();

app.use("/", router);

app.use(express.json());

app.use(bp.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "templates")))


//// SIGN UP FUNCTION ////
// const signup = async (req,res) =>{
// 	const {Username, Password} = req.body
// 	bcryptjs.hash(Password)
// 	const body = req.body
// 	const user = await new User({
// 		Username:Username,
// 		Password:Password
// 	});
// 	await user.save()
// 	console.log(user)
// 	res.redirect("/login")
// }

//// PASSWORD VERIFIER ////
// const verifier = async (req, res, user) => {
// 	const {Username, Password} = req.body
// 	await bcryptjs.compare(Password, user.Password, (ans) => {
// 		if(ans){
// 			const jw = Jwt.sign({Username:user.Username}, '12345',{expiresIn: "3h"})
// 			console.log(`${User} signed in`)
// 		}
// 		else{
// 			console.log("SIGN IN FAILED :(")
// 		}
// 	})
// }

//// LOGIN FUNCTION ////
// const login = async(req,res) => {
// 	const {Username, Password} = req.body
// 	await User.findOne({$or: [{Username: Username}, {Password: Password}] })
// 	.then(user => {
// 		if(user){
// 			verifier(user)
// 		}
// 		// else{
// 		// 	console.log(`${user} doesn't exist`)
// 		// }
// 	})
// }
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
	.post(bp.urlencoded({ extended: true }), async (req, res) => {
		const { Username, Password } = req.body;
		User.findOne({Username: Username, Password: Password}, (user, err) => {
			if(err){
				console.log(err)
			}
			if(!user){
				console.log("Account not found");
			}
			else{
			console.log("Logged in")
			res.redirect("/timers")}
		})
	})

router
	.route("/signup")
	.get((req, res) => {
		res.sendFile(path.join(__dirname + "/templates/signup.html"));
	})
	.post(bp.urlencoded({extended: true}), async (req, res) => {
		const { Username, Password } = req.body;
		const hashed = await bcryptjs.hash(Password,8)
		const user = await new User({Username: Username, Password: hashed});
		await user.save()
		console.log("User successfully created")
		console.log(user)
		res.redirect("/login")})

app.get("/timers", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/timers.html"))
})

export default app; router;

