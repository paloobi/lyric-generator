var router = require('express').Router();
var getPoem = require('../models/generator').getPoem;
var fs = require('fs');
var marked = require('marked');

router.get('/', function(req, res){
	res.render('index');
});

router.get('/about', function(req, res){
	fs.readFile('README.md', function(err, contents){
		if(err) console.log(err);
		renderedContents = marked(contents.toString());
		res.render('about', {readMe:renderedContents});
	});
});

router.post('/generate', function(req, res, next) {
  var poem = getPoem(3);
  console.log(poem);
  res.send(poem);
});

module.exports = router;