var fs = require("fs");

var data = fs.readFileSync('v.txt');

console.log(data.toString());
console.log("Program Ended");
