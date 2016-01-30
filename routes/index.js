var router = require('express').Router();
var getPoem = require('../models/generator').getPoem;
var fs = require('fs');
var marked = require('marked');
var path = require('path');

router.get('/', function(req, res){
	res.render('index', {value: 12});
});

router.get('/about', function(req, res){
	fs.readFile('README.md', function(err, contents){
		if(err) console.log(err);
		renderedContents = marked(contents.toString());
		res.render('about', {readMe:renderedContents});
	});
});

// router.get("/poem", function(req, res){
//  res.render('poem');
// });
var poem;
router.post('/generate', function(req, res, next) {
  var numLines = req.body.numLines;
	poem = getPoem(numLines);
  res.render('index',{poem:poem, value: numLines});
});

router.post('/save',function(req,res,next){
	console.log(poem);
	fs.writeFile(path.join(__dirname,'../public/','./poem.txt'),poem.join(', '));
	res.sendFile(path.join(__dirname,'../public/','./poem.txt'));
});
module.exports = router;