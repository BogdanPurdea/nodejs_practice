var express = require('express');
var app = express();
var mysql = require('mysql')
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bogdanpurdea14:outofmyyard2.@cluster0.af7lknx.mongodb.net/')
    .then(() => console.log('Connected!'));

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 Main St.'
});

john.save();

var jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: '555 Main St.'
});

jane.save();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Request Url: ' + req.url);
    
    //get all the users
    var persons = Person.find({});
    console.log(persons);
    
    next();
});

htmlController(app);

apiController(app);

app.listen(port);