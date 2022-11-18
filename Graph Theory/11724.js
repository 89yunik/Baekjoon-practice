const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(e => +e)
const graph = Array.from({length: N + 1}, _ => [])
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(e => +e)
  graph[a].push(b)
  graph[b].push(a)
}
const visited = Array.from({length: N + 1}, _ => false)
let answer = 0
for (let i = 1; i <= N; i++) {
  const stack = []
  if (visited[i]) continue
  answer++
  stack.push(i)
  while (stack.length) {
    const curr = stack.pop()
    if (visited[curr]) continue
    visited[curr] = true
    for (let j = 0; j < graph[curr].length; j++) {
      const next = graph[curr][j]
      if (!visited[next]) stack.push(next)
    }
  }
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
