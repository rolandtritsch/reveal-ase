import { fibonacci } from './fibonacci';

if (process.argv.length < 3) {
    console.error('Please provide a number as a command-line argument.');
    process.exit(1);
}

const num = parseInt(process.argv[2], 10);

if (isNaN(num)) {
    console.error('The argument is not a valid number.');
    process.exit(1);
}

console.log(`Fibonacci of ${num} is ${fibonacci(num)}`);

