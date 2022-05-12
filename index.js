import express from 'express';
import bp from 'body-parser';
import path from 'path';
import {userModel} from './models/userModel.js'
import client from './config/db.js';
import insertDB from './config/db.js';


const app = express();

const router = express.Router();
const __dirname = path.resolve();

app.use("/", router);

app.use(bp.json());

app.use(express.urlencoded({ extended: true }));

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

.post((req, res) => {
	const User = new userModel(req.username)
	User.save()
	insertDB(User)
	res.redirect("/login")

})

app.get("/timers", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/timers.html"))
})

export default app; router;

