"use strict";
exports.__esModule = true;
var fibonacci_1 = require("./fibonacci");
if (process.argv.length < 3) {
    console.error('Please provide a number as a command-line argument.');
    process.exit(1);
}
var num = parseInt(process.argv[2], 10);
if (isNaN(num)) {
    console.error('The argument is not a valid number.');
    process.exit(1);
}
console.log("Fibonacci of ".concat(num, " is ").concat((0, fibonacci_1.fibonacci)(num)));
