var fs = require('fs');

var path = process.argv[2]

var file = fs.readFileSync(path).toString();

var fileArray = file.split('\n');

console.log(fileArray.length-1);


