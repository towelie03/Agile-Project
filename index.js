const mongo = require('mongodb');
const mongoose = require('mongoose');
const express = require('express');
const bp = require('body-parser');
const path = require('path');

const app = express();
const db = require("./config/db")
const router = express.Router();

app.use("/", router);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

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

app.use(express.static(__dirname + "/templates"))

app.get("/timers", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/timers.html"))
})


module.exports = app;

