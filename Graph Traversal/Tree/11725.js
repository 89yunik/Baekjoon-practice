const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input[0])
const graph = new Array(N + 1).fill().map(_ => [])
for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(e => +e)
  graph[a].push(b)
  graph[b].push(a)
}

const answer = new Array(N + 1)
const stack = []
stack.push(1)
while (stack.length) {
  const curr = stack.pop()
  for (let i = 0; i < graph[curr].length; i++) {
    const child = graph[curr][i]
    if (!answer[child] && child !== 1) {
      answer[child] = curr
      stack.push(child)
    }
  }
}
console.log(answer.slice(2).join('\n'))
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
