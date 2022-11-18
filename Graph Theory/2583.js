const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [M, N, K] = input[0].split(' ').map(e => +e)
const S = Array.from({length: M}, _ => Array.from({length: N}, _ => 0))
const visited = Array.from({length: M}, _ =>
  Array.from({length: N}, _ => false),
)
for (let i = 1; i <= K; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map(e => +e)
  for (let j = y1; j < y2; j++) {
    for (let k = x1; k < x2; k++) S[j][k] = 1
  }
}
let [num, answer] = [0, []]
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (visited[i][j] || S[i][j]) continue
    num++
    const stack = []
    let area = 0
    stack.push([i, j])
    while (stack.length) {
      const [x, y] = stack.pop()
      if (visited[x][y]) continue
      area++
      visited[x][y] = true
      if (x - 1 >= 0 && !visited[x - 1][y] && !S[x - 1][y])
        stack.push([x - 1, y])
      if (x + 1 < M && !visited[x + 1][y] && !S[x + 1][y])
        stack.push([x + 1, y])
      if (y - 1 >= 0 && !visited[x][y - 1] && !S[x][y - 1])
        stack.push([x, y - 1])
      if (y + 1 < N && !visited[x][y + 1] && !S[x][y + 1])
        stack.push([x, y + 1])
    }
    answer.push(area)
  }
}
answer.sort((a, b) => a - b)
console.log(num + '\n' + answer.join(' '))
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
