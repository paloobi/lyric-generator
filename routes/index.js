var router = require('express').Router();
var words = require('../models/words');

router.get('/', function(req, res){
	res.render('index');
});

router.post('/generate', function(req, res, next) {
  var pattern = getRandomPattern();
  console.log(pattern);
  var phrase = pattern.map(function(type, idx){
    var word = getWord(type);
    if (idx === 0) word = word[0].toUpperCase() + word.slice(1);
    return word;
  });
  console.log(phrase);
  res.send(phrase.join(" ") + "\n");
});

function getWord(type) {
  console.log('type is', type);
  if (type === 'me' || type === 'you') {
    return type;
  }
  var max = words[type].length;
  var min = 0;
  var idx = Math.floor(Math.random() * (max - min)) + min;
  var word = words[type][idx];
  if (type === "!") {
    word += "!";
  }
  return word;
}

var phrasePatterns = [
  ["D","A", "N", "t", "me"],
  ["D", "A", "h", "t", 'you', "A" ],
  ["D", "A", "N", "i", "you"],
  ["t", "me"],
  ["i", "you"],
  ["you", "t", "D", "h"],
  ["ex", "ex"]
]

function getRandomPattern() {
  var max = phrasePatterns.length;
  var min = 0;
  var idx = Math.floor(Math.random() * (max - min)) + min;
  return phrasePatterns[idx];
}

module.exports = router;