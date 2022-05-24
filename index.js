import express from 'express';
import bp from 'body-parser';
import path from 'path';
import { User } from './models/userModel.js';
import connected from './config/db.js';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs'
import Jwt from 'jsonwebtoken';
import passport from 'passport';
import bcrypt from 'bcryptjs';
// import { timer as Timer } from './models/timerModel';



const uri = "mongodb+srv://admin:Password@agile.ja8u2.mongodb.net/tester?retryWrites=true";
// const uri = 'mongodb://localhost:27017/tester'
mongoose.connect(uri)

const app = express();

const router = express.Router();
const __dirname = path.resolve();

app.use("/", router);

app.use(express.json());

app.use(bp.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "views")));


app.set('view engine', 'ejs');


let userID;

router
	.route("/")
	.get((req, res) => {
		res.render("login", {
			Username: "",
			Password: ""
		});
	})
	.post(bp.urlencoded({ extended: true }), async (req, res) => {
		const Username = req.body.Username;
		const Password = req.body.Password;

		const userCheck = await User.findOne({ Username: Username })
		if (userCheck) {
			userID = Username
			const passCheck = await bcrypt.compare(Password, userCheck.Password);
			if (passCheck) {
				console.log("Successful login")
				res.redirect('/saves')

			}
			if (!passCheck) {
				console.log("Password Incorrect")
			}
		}
		if (!userCheck) {
			console.log("User doesn't exist")
			res.redirect("/signup")
		}

	})

router
	.route("/about")
	.get((req, res) => {
		res.sendFile(path.join(__dirname + "/views/about.html"));
	})

router
	.route("/story")
	.get((req, res) => {
		res.sendFile(path.join(__dirname + "/views/story.html"));
	})

// router
// 	.route("/saves")
// 	.get((req, res) => {
// 		Timer.find()
// 		res.render("saves", { data:""});
// 	})
	// .post(bp.urlencoded({ extended: true }), async (req, res) => {
	// 	const Username = req.body.Username;
	// 	const Password = req.body.Password;

	// 	const userCheck = await User.findOne({ Username: Username })
	// 	if (userCheck) {
	// 		userID = Username
	// 		const passCheck = await bcrypt.compare(Password, userCheck.Password);
	// 		if (passCheck) {
	// 			console.log("Successful login")
	// 			res.redirect('/timers')

	// 		}
	// 		if (!passCheck) {
	// 			console.log("Password Incorrect")
	// 		}
	// 	}
	// 	if (!userCheck) {
	// 		console.log("User doesn't exist")
	// 		res.redirect("/signup")
	// 	}

	// })

router
	.route("/signup")
	.get((req, res) => {
		res.render("signup", {
			Username: "",
			Password: "",
		});
	})
	.post(bp.urlencoded({ extended: true }), async (req, res) => {
		const Username = req.body.Username;
		const Password = req.body.Password;
		const hashedPass = await bcrypt.hash(Password, 10)
		const user = await new User({ Username: Username, Password: hashedPass });
		User.findOne({ Username: Username }, async (err, check) => {
			if (err) {
				console.log(err)
			}
			if (check) {
				console.log("User already exists")
				res.redirect('/login')
			}
			if (!check) {
				await user.save()
				console.log("User successfully created")
				console.log(user)
				res.redirect("/login")
			}

		})
	}
	)

router
	.route("/timers")
	.get((req, res) => {
		res.render("timers")
	})

export default app; router;

