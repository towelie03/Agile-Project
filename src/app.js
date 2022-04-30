const mongo = require('mongodb');
const express = require('express');
const bp = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const db = mongoose.connect("mongodb://localhost/courseAPI");
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router
    .route("/apis")
    .post((req, res) => {
        const course = new Course(req.body);
        course.save();
        return res.status(201).json(course);
    })
    .get((req, res) => {
        const course = new Course(req.body);
        const query = {};
        if (req.query.genre) {
            query.InstName = req.query.InstName;
        }
        Course.find(query, (err, courses) => {
            if (err) {
                return res.send(err);
            }
            return res.json(courses);
        })
    })
    .delete((req, res) => {
        const course = new Course(req.body);
        const query = {};
        Course.find(query, (err, courses) => {
            if (err) {
                return res.send(err);
            }
            for (i of courses) { i.remove() };
            return res.json(courses);
        })
    });

courseRouter.use("/api/:id", (req, res, next) => {
    Course.findById(req.params.id, (err, course) => {
        if (err) {
            return res.send(err);
        }
        if (course) {

            req.course = course;
            return next();
        }
        return res.sendStatus(404);
    });
});

courseRouter
    .route("/api/:id")
    .post((req, res) => {
        const course = new Course(req.body);
        course.save();
        return res.status(201).json(course);
    })

    .delete((req, res) => {
        req.course.remove((err) => {
            if (err) {
                return res.send(err);
            }
            return res.json(req.course);
        });
    })
    .patch((req, res) => {
        const { course } = req;
        course.title = req.body.Dateandtime;
        course.author = req.body.course;
        course.genre = req.body.Location;
        course.read = req.body.InstName;
        course.save();
        return res.json(course);
    })

    .put((req, res) => {
        const { course } = req;
        course.title = req.body.Dateandtime;
        course.author = req.body.course;
        course.genre = req.body.Location;
        course.read = req.body.InstName;
        course.save();
        return res.json(course);
    })
    .get((req, res) => {

        Course.findById(req.params.id, (err, course) => {
            if (err) {
                return res.send(err);
            }
            return res.json(course);
        });
    });


app.use("/api", courseRouter);

app.get("/", (req, res) => {
    const course = new Course(req.body);
    res.send("Welcome to my API!");
});


app.listen(port, () => {
    console.log(`Running on port ${port}`);
});




	

