const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const [A, B] = input[0].split(' ').map(e => Number(e))

const max = Math.floor(Math.sqrt(B))
const pNums = []
const visited = new Array(max + 1).fill(false)
for (let i = 2; i < max + 1; i++) {
  if (visited[i]) continue
  visited[i] = true
  pNums.push(i)
  for (let j = 2; i * j < max + 1; j++) visited[i * j] = true
}

let answer = 0
for (const pNum of pNums) {
  let candidate = pNum * pNum
  while (candidate <= B) {
    if (candidate >= A) answer++
    candidate *= pNum
  }
}
console.log(answer)
