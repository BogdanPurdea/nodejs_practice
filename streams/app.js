var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/file.txt', 
    { encoding: 'utf8', highWaterMark: 2 * 1024 });

var writable = fs.createWriteStream(__dirname + '/copy.txt');

readable.on('data', function(chunk) {
    console.log(chunk);
    writable.write(chunk);
});