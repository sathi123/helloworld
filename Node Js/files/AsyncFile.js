var fs = require("fs");

fs.readFile('v.txt',
function (er, d)
{ 
if (er)
return console.error(er);
console.log(d.toString());
}

);

console.log("Program Ended");
