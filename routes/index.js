var router = require('express').Router();
var getPoem = require('../models/generator').getPoem;

router.get('/', function(req, res){
	res.render('index');
});

router.post('/generate', function(req, res, next) {
  var poem = getPoem(3);
  res.send(poem);
});

module.exports = router;