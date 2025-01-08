var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/file.txt');

var writable = fs.createWriteStream(__dirname + '/copy.txt');

var compressed = fs.createWriteStream(__dirname + '/file.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);