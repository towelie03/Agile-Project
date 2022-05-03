const mongo = require('mongodb');
const mongoose = require('mongoose');
const express = require('express');
const bp = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const db = mongoose.connect("mongodb://localhost:27017/users");
const router = express.Router();


app.use("/", router);

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

app.get("/timers", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/timers.html"))
})


app.listen(port, () => {
    console.log(`Running on port ${port}`);
    console.log('press CTRL + C to quit');
});
