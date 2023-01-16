const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(e => +e)
const nArr = input[1]
  .split(' ')
  .map(e => +e)
  .sort((a, b) => a - b)
const stack = []
let answer = []
let start = 0
while (start < N) {
  stack.push([start])
  while (stack.length) {
    const curr = stack.pop()
    const visited = new Array(N).fill(false)
    curr.forEach(e => (visited[e] = true))
    if (curr.length === M) {
      answer.push(curr.map(e => nArr[e]).join(' '))
      continue
    }
    for (let i = N - 1; i >= 0; i--) {
      if (!visited[i]) stack.push([...curr, i])
    }
  }
  start++
}
console.log(answer.join('\n'))
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
