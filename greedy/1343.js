const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let X = input[0]
X = X.replaceAll('XXXX', 'AAAA')
X = X.replaceAll('XX', 'BB')
let answer = -1
if (!X.includes('X')) answer = X
console.log(answer)
