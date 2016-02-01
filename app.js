var express = require ( 'express' );
var swig = require ('swig');
var bodyParser = require('body-parser');
var routes = require('./routes/');
var app = express();

// template settings
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// static files
app.use(express.static('public'));

swig.setDefaults({ cache: false });

var server = app.listen(process.env.PORT || 3000, function() {
	console.log("server listening");
});

// body parsing middleware
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(bodyParser.json());

app.use('/', routes);

