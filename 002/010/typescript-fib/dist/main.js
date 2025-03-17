"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fibonacci_1 = require("./fibonacci");
if (process.argv.length < 3) {
    console.error('Please provide a number as a command-line argument.');
    process.exit(1);
}
const num = parseInt(process.argv[2], 10);
if (isNaN(num)) {
    console.error('The argument is not a valid number.');
    process.exit(1);
}
console.log(`Fibonacci of ${num} is ${(0, fibonacci_1.fibonacci)(num)}`);
//# sourceMappingURL=main.js.map