const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

//Connect to Atlas Cluster
const mongoDB = 'mongodb+srv://user1:123@cluster0-lp3sy.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

const connection = mongoose.connection;

//Console Log If Mongoose Connection was Successful
connection.once('open', () => {
    console.log("MongoDB Database Connection Established Successfully");

})

//Setting up Parameters of the Connection
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const Schema = mongoose.Schema;

//Setup Game Schema
const gameSchema = new Schema({
    title: String,
    year: String,
    cover: String,
    review: String,
    rating: String

})

const GameModel = mongoose.model('game', gameSchema);

//Testing Server
app.get('/', (req, res) => res.send('Test123'))

//Get Data From Api/Games
app.get('/api/games', (req, res) => {
    GameModel.find((error, data) => {
        res.json({ games: data })
    })
})

//Grab ID Data from Api/Games
app.get('/api/games/:id', (req, res) => {
    console.log(req.params.id);

    GameModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

//Grab ID Data from Api/Games
app.get('/api/games/search/:title', (req, res) => {
    console.log(req.params.title);

    GameModel.find({ title: req.params.title }, (err, data) => {
        res.json(data)
        // if (err) return handleError(err);

    })
})

// Handle Delete Request
app.delete('/api/games/:id', (req, res) => {
    console.log("Deleted Game ID ::" + req.params.id);

    GameModel.deleteOne({ _id: req.params.id },
        (error, data) => {
            res.json(data);
        })
})

//Handle Edit Request
app.put('/api/games/:id', (req, res) => {
    console.log("Edit: " + req.params.id);
    console.log(req.body);

    GameModel.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true },
        (error, data) => {
            res.json(data);
        })
})

//Handle Get Requests
app.get('/api/games/:id', (req, res) => {
    console.log("GET: " + req.params.id);

    GameModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

//Handle Post Requests to Server Connected to Mongo Schema
app.post('/api/games', (req, res) => {
    console.log('Post request Successful');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.cover);
    console.log(req.body.review);
    console.log(req.body.rating);

    GameModel.create({
        title: req.body.title,
        year: req.body.year,
        cover: req.body.cover,
        review: req.body.review,
        rating: req.body.rating
    });

    res.json("Post Request Recieved!");
})

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))