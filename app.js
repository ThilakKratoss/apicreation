var express = require('express');
var ejs = require('ejs');
var mongoose = require('mongoose');

var setupcontroller = require('./controllers/setupcontroller');
var apicontroller = require('./controllers/apicontrollers');
var connection = 'mongodb://thilak:thilakal123@ds233278.mlab.com:33278/nodetodo';

mongoose.set('useFindAndModify', false);

//var config = require('./config/dbconnection');


var app = express();
var port = process.env.PORT || 3200;

app.use('/assets',express.static(__dirname + '/public'));

app.set('view engine','ejs');


mongoose.connect(connection,{ useNewUrlParser: true });

setupcontroller(app);
apicontroller(app);

console.log('connected');

app.listen(port);
