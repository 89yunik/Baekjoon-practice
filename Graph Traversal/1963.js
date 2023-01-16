const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function diff(a, b) {
  let cnt = 0
  for (let i = 0; i < 4; i++) a[i] !== b[i] && cnt++
  return cnt
}

const T = +input[0]
const answer = new Array(T).fill('Impossible')
const [not, pNum] = [{}, {}]
for (let i = 2; i < 10000; i++) {
  if (not[i]) continue
  if (i >= 1000) pNum[i] = new Set()
  for (let j = 2; i * j < 10000; j++) not[i * j] = true
}
for (const a in pNum) {
  for (const b in pNum) {
    if (diff(a, b) === 1) {
      pNum[a].add(b)
      pNum[b].add(a)
    }
  }
}
for (let i = 1; i <= T; i++) {
  const [start, end] = input[i].split(' ')
  const queue = [[start, 0]]
  const visited = new Set()
  while (queue.length) {
    const [curr, num] = queue.shift()
    if (visited.has(curr)) continue
    visited.add(curr)
    if (curr === end) {
      answer[i - 1] = num
      break
    }
    for (const next of pNum[curr]) {
      if (!visited.has(next)) queue.push([next, num + 1])
    }
  }
}
console.log(answer.join('\n'))
