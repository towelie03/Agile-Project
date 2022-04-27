const mariadb = require('mariadb');
const express = require('express');
const bp = require('body-parser');
const db = require('./mariadb');
const app = express();
const port = process.env.PORT || 8080;

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

/*the webapp should be displayed on the homepage upon entering the site. the route for this is "/" but can be changed later on if that dosent suit our needs*/

/*this is the router for setting up the logic of the CRUD application. this is a template need to add more later */


// GET
app.get('/tasks', async (req, res) => {
    try {
        const result = await db.pool.query("select * from tasks");
        res.send(result);
    } catch (err) {
        throw err;
    }
});
 
// POST
app.post('/tasks', async (req, res) => {
    let task = req.body;
    try {
        const result = await db.pool.query("insert into tasks (description) values (?)", [task.description]);
        res.send(result);
    } catch (err) {
        throw err;
    }
});

//PUT
app.put('/tasks', async (req, res) => {
    let task = req.body;
    try {
        const result = await db.pool.query("update tasks set description = ?, completed = ? where id = ?", [task.description, task.completed, task.id]);
        res.send(result);
    } catch (err) {
        throw err;
    } 
});

//Delete
app.delete('/tasks', async (req, res) => {
    let id = req.query.id;
    try {
        const result = await db.pool.query("delete from tasks where id = ?", [id]);
        res.send(result);
    } catch (err) {
        throw err;
    } 
});



//basic routes for the application

/*app.get("/", (req, res) => {
	res.send("Welcome to our Pomodoro webapp (working name needs to be change later)");/*This is the main page our app will be hosted on unless this changes in the next 5 weeks. eventually we will change what is in the res.send
});*/

app.listen(port, () => {
	console.log(`Running on port ${port}`);/*this is to check if the app is running correctly*/
});

	

