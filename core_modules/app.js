var util = require('node:util');

var name = 'Bogdan';
var greeting = util.format('Hello, %s', name);
util.log(greeting);