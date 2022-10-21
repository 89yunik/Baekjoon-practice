const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(e => +e)
const A = input[1].split(' ').map(e => +e)
let answer = 0
for (let i = 0; i < A.length; i++) {
  let num = 0
  let j = i
  while (num < M) num += A[j++]
  if (num === M) answer++
}
console.log(answer)
// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// let input = []

// rl.on('line', function (line) {
//   input.push(line)
// }).on('close', function () {
//   process.exit()
// })
