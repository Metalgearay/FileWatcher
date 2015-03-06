
// var fs = require('fs');
// console.log(fs);
// console.log(fs.readFileSync('./file1.txt'));
//var greeter = require('./greeter');
//greeter.greet("Brett");
//greeter.shout("GG");
var fs = require('fs');
fs.readFile("./file1.txt", function(err,data)
{
	console.log(data);
	console.log(data.toString());
});