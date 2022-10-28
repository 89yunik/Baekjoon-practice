const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input.shift())
input.sort((a, b) => b.length - a.length)
const output = []
for (const str of input)
  if (output.every(e => e.indexOf(str) !== 0)) output.push(str)
console.log(output.length)
