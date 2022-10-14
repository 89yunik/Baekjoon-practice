const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const S = Number(input[0])
const answer = Math.floor((Math.sqrt(1 + 8 * S) - 1) / 2)
console.log(answer)
