const input = require('fs').readFileSync('teste.txt', 'utf8');
const lines = input.split('\n');

console.log(lines)

const a = Number(lines[0]);
const b = Number(lines[1]);

// const a = parseInt(lines.shift());
// const b = parseInt(lines.shift());

console.log('X = ' + (a+b));
// console.log(lines.shift().split(" "));


