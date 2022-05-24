import express from 'express';
import bp from 'body-parser';
import path from 'path';

const app = express();

const router = express.Router();
const __dirname = path.resolve();

app.use("/", router);

app.use(bp.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "templates")))

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/templates/index.html"));
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

export default app;

