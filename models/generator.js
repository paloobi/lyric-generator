var words = require('./words');

function getWord(type) {
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
  ["D", "A", "h", "t", 'obj', "A" ],
  ["D", "A", "N", "i", "obj"],
  ["t", "me"],
  ["i", "you"],
  ["you", "t", "D", "h"],
  ["ex", "ex"],
  ['v','obj','i','P','D','A','N'],
  ['obj',"V","A"],
  ['ex','obj'],
  ['obj','t', 'obj']
];

function getRandomPattern() {
  var max = phrasePatterns.length;
  var min = 0;
  var idx = Math.floor(Math.random() * (max - min)) + min;
  return phrasePatterns[idx];
}

function getLine() {
  var pattern = getRandomPattern();

  var phrase = pattern.map(function(type, idx){
    var word = getWord(type);
    if (idx === 0) word = word[0].toUpperCase() + word.slice(1);
    return word;
  });

  return phrase.join(" ");
}

function getPoem(length) {
  var poem = [];
  for (var i = 0 ; i < length; i++) {
    poem.push(getLine());
  }
  return poem;
}

module.exports.getPoem = getPoem;