var express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // for POST

var app = express();
const db = mongoose.connect("mongodb://127.0.0.1:27017/cookbookApp", { useNewUrlParser: true })
.then(() => {
    console.log("we have connected to mongo")
}).catch(() => {
    console.log("could not connect to mongo")
})
// const bookRouter = express.Router();
// set the port
var port = process.env.PORT || 3000;

const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());



app.use('/api', bookRouter);

// get handler
app.get('/', (req, res) => {
    res.send('Welcome to my Nodemon API!!');
});

app.listen(port, () => {
    console.log('Running on port ' + port);
});