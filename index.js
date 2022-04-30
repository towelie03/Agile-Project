const mongo = require('mongodb');
const express = require('express');
const bp = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
//const db = mongoose.connect("mongodb://localhost/");
const router = express.Router();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());


app.use("/", router);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/templates/index.html");
});


app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
