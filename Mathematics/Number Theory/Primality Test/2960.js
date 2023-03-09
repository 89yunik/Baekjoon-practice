const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, K] = input[0].split(' ').map(e => +e)
const visited = {}
let [cnt, answer] = [0, 0]
for (let i = 2; i <= N; i++) {
  if (visited[i]) continue
  for (let j = 1; i * j <= N; j++) {
    if (visited[i * j]) continue
    if (++cnt === K) {
      answer = i * j
      break
    }
    visited[i * j] = true
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
