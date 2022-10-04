const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function swap(string, [i, j]) {
  return (
    string.substring(0, i) +
    string[j] +
    string.substring(i + 1, j) +
    string[i] +
    string.substring(j + 1, string.length)
  )
}
const [N, K] = input.shift().split(' ')
let answer = -1
const visited = new Array(Number(K) + 1).fill().map(_ => new Set(['-1']))
const length = N.length
const index = []
for (let i = 0; i < length - 1; i++) {
  for (let j = i + 1; j < length; j++) {
    index.push([N, i, j, 0])
  }
}
const queue = [...index]
while (queue.length) {
  const [curr, i, j, swapCount] = queue.shift()
  if (swapCount === Number(K)) continue
  const next = swap(curr, [i, j])
  if (next[0] === '0' || visited[swapCount + 1].has(next)) continue
  visited[swapCount + 1].add(next)
  index.forEach(([curr, i, j]) => {
    queue.push([next, i, j, swapCount + 1])
  })
}
answer = Math.max(...visited[K])

console.log(answer)
