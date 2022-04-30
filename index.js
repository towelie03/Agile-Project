const mongo = require('mongodb');
const express = require('express');
const bp = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const db = mongoose.connect("mongodb://localhost/");
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/", router);

app.get("/", (req, res) => {
	res.send(__dirname + "./templates/index.html");
});


app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
