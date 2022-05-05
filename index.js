import express from 'express';
import mongoose from 'mongoose';
import mongo from 'mongodb';
import bp from 'body-parser';
import path from 'path';
import userModel from './models/user.model.js';
//import db from './config/db.js';

const app = express();

const router = express.Router();
const __dirname = path.resolve();

app.use("/", router);

app.use(bp.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "templates")))

app.get("/test", (req, res) => {
	res.json({ msg: "This is a test for the mongo auth" });
});

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/index.html"));
});

app.get("/about", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/about.html"));
});

app.get("/story", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/story.html"));
});

app.get("/login", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/login.html"));
});

app.get("/signup", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/signup.html"));
});
app.post("/signup", function(req, res){
	let newUser = new userModel(req.body)
	newUser.save()
})

app.use(express.static(__dirname + "/templates"))

app.get("/timers", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/timers.html"))
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Running on port ${port}`);
    console.log('press CTRL + C to quit');
});


// export default app;

