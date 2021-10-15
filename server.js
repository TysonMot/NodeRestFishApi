var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;


mongoose = require('mongoose');
Fish = require('./models/fishModel');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/FishDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/Router');
routes(app);

app.listen(port);

console.log('FISH list RESTful API server started on: ' + port);