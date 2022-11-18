const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(e => +e)
const r = input.length - 1
const c = input[1].length
const arr = []
const visited = new Array(r).fill().map(e => new Array(c).fill(false))
for (let i = 1; i <= N; i++) {
  const row = input[i].split('').map(e => +e)
  arr.push(row)
}
const queue = []
let answer = Infinity
queue.push([0, 0, 1])
while (queue.length) {
  const [i, j, num] = queue.shift()
  if (i === N - 1 && j === M - 1) {
    answer = num
    break
  }
  if (visited[i][j]) continue
  visited[i][j] = num
  if (i >= 1 && arr[i - 1][j]) queue.push([i - 1, j, num + 1])
  if (j >= 1 && arr[i][j - 1]) queue.push([i, j - 1, num + 1])
  if (i < N - 1 && arr[i + 1][j]) queue.push([i + 1, j, num + 1])
  if (j < M - 1 && arr[i][j + 1]) queue.push([i, j + 1, num + 1])
}

console.log(answer)
