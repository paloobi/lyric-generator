var fs = require('fs');
var fileSave = require('file-save');

fs.readFile('mobyposi.i', function(err, data) {
  if (err) throw err;
  var mobyData = data.toString().split("\r");
  var words = {};

  mobyData.forEach(function(line) {
    var divider = line.indexOf('+');
    var word = line.slice(0,divider);
    var types = line.slice(divider+1).split("");

    types.forEach( function(type) {
      if (!words[type]) {
        words[type] = [];
      }
      words[type].push(word);
    });

  });

  fs.writeFile('words.json', JSON.stringify(words), { encoding: 'utf8' }, function() {
    console.log('wrote words to JSON file');
  });

  // var writeStream = fileSave('words.json');
  // for (var type in words) {
  //   console.log(type);
  //   writeStream.write( type + ":" + JSON.stringify(words[type]) );
  // }
  // writeStream.end();
  // writeStream.on('finish', function() {
  //   console.log('all writes are now complete.');
  // });
  // for (var type in words) {
  //   var results = "";
  //   results += type + ":";
  //   results += JSON.stringify(words[type])
  //   fs.writeFile(type + '.json', results, { encoding: 'utf8' }, function() {
  //     console.log('wrote ' + type + ' words to JSON file');
  //   });;
  // }

});