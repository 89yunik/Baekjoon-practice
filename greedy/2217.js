const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input.shift())
const answer = []
input = input.map(e => +e).sort((a, b) => a - b)
for (let i in input) answer.push(input[i] * (N - i))
console.log(Math.max(...answer))
