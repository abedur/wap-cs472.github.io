Array.prototype.even = function () {
    return this.filter((x) => x % 2 === 0);
};

Array.prototype.odd = function () {
    return this.filter((x) => x % 2 !== 0);
};

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8].even();
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8].odd();

console.log(`Even: ${arr1}`);
console.log(`Odd: ${arr2}`);


/*
Question 2
1. Explain why do we want sometimes to use setImmediate instead of using setTimeout?

setTimeout runs once in Timer (current poll) phase, setImmediate runs in check phase. setTimeout() schedules a script to be run after a minimum threshold in ms has elapsed.

For example: If there's a case needs to run just before close phase, we can use setImmediate.

var fs = require('fs'); var path = require('path');
fs.readFile(path.join(__dirname, 'greet.txt'), 'utf8', function(err, data) {
setTimeout(() => { console.log('timeout'); }, 0);
setImmediate(() => { console.log('immediate'); });
process.nextTick(() => console.log('nexttick')); });

2. Explain the difference between process.nextTick and setImmediate?
callback of process.nextTick get executed multiple chances in one iteration - highest priotiry.
setImmediate only get executed once in one cycle.
how many callbacks will be executed in one iteration? 
process.nextTick() - all of callbacks in nextTick queue, drain out - We should not use while true loop on process.nextTick,
it will block event loop. 
setImmediate - certain, the remaining for next iteration/tick process.nextTick - API provided natively by Node.js setImmediate - provided by libuv

3. Does Node.js has window object?
No
*/