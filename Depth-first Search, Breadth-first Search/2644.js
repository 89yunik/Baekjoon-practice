const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = Number(input[0])
const [a, b] = input[1].split(' ').map(e => +e)
const m = Number(input[2])
const graph = new Array(n + 1).fill().map(_ => [])
for (let i = 0; i < m; i++) {
  const [x, y] = input[i + 3].split(' ').map(e => +e)
  graph[x].push(y)
  graph[y].push(x)
}
let answer = -1
const queue = []
const visited = new Array(n + 1).fill(false)
queue.push([a, 0])
while (queue.length) {
  const [curr, num] = queue.shift()
  if (visited[curr]) continue
  visited[curr] = true
  if (curr === b) {
    answer = num
    break
  }
  for (let i = 0; i < graph[curr].length; i++) {
    const next = graph[curr][i]
    if (!visited[next]) queue.push([next, num + 1])
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
