const mongo = require('mongodb');
const express = require('express');
const bp = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
//const db = mongoose.connect("mongodb://localhost/");
const router = express.Router();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());


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




app.listen(port, () => {
    console.log(`Running on port ${port}`);
    console.log('press CTRL + C to quit');
});
