const mongoose = require('mongoose');

const url = "mongodb+srv://admin:P@ssw0rd@agile.ja8u2.mongodb.net/Agile?retryWrites=true&w=majority";

const connectionParams={
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
};

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
