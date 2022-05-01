const mongo = require('mongodb');
const mongoose = require('mongoose');
const express = require('express');
const bp = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const db = mongoose.connect("mongodb://localhost:27017/users");
const router = express.Router();

db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
});

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.post('/sign_up', function(req, res){
	const name = req.body.name;
	const email = req.body.email;
	const username = req.body.username;
	const pass = req.body.password;

	const data = {
		"name":name,
		"email":email,
		"username":username,
		"password":pass
	}
	db.collection('details').insertOne(data, function(err, collection){
		if (err) throw err;
		console.log('Record inserted Successfully');
	});
	return res.redirect('./templates/login.html')
})

app.use("/", router);

app.get("/index.html", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/index.html"));
});

app.get("/about.html", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/about.html"));
});

app.get("/story.html", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/story.html"));
});

app.get("/login.html", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/login.html"));
});

app.get("/signup.html", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/signup.html"));
});


app.listen(port, () => {
    console.log(`Running on port ${port}`);
    console.log('press CTRL + C to quit');
});
