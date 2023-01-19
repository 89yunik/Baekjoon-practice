const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [M, N] = input[0].split(' ').map(e => +e)
const visited = {}
const pNum = []
for (let i = 2; i <= N; i++) {
  if (visited[i]) continue
  if (i >= M) pNum.push(i)
  for (let j = 2; i * j <= N; j++) visited[i * j] = true
}
console.log(pNum.join('\n'))
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
