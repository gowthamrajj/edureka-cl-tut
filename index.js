var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var routes = require('./routes/router.js');

const port = 3000;

var app = express();

//connect to mongodb
mongoose.connection.openUri('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected', ()=>{
    console.log("Connected to DB");
});
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log(`Error while connecting to DB ${err}`);
    }
});

//Cross origin support middle
app.use(cors());

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//serving static content
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', routes);

app.get('/', (req, res)=>{
    res.send("Hello World");
});

app.listen(port , ()=> {
    console.log(`The server is listening at port ${port}`);
});
