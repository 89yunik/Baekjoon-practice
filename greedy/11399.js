const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input[0])
const time = input[1]
  .split(' ')
  .map(e => +e)
  .sort((a, b) => a - b)
const answer = time.reduce((prev, curr, i) => prev + curr * (N - i), 0)
console.log(answer)
