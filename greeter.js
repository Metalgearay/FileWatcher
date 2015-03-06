

var greet = function(name)
{
	console.log("Hello, "+name);
};
var shout = function (name)
{
	console.log("Hello" + name  + "!");
};
module.exports = {
	greet:greet,
	shout:shout
};
console.log("Node starting...");