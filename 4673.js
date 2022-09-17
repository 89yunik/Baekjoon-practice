// const fs = require('fs')
// const input = fs.readFileSync('./dev/stdin').toString().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')

function d(n) {
  const sum = n
    .toString()
    .split('')
    .map(e => parseInt(e))
    .reduce((prev, curr) => prev + curr, 0)
  return n + sum
}

const selfNumber = []
const visited = new Array(10001).fill(false)
visited[0] = true
let start = 0
while (visited.includes(false)) {
  start = visited.findIndex((e, i) => e === false && i > start)
  visited[start] = true
  selfNumber.push(start)
  number = d(start)
  while (visited[number] === false && number <= 10000) {
    visited[number] = true
    number = d(number)
  }
}
selfNumber.forEach(e => console.log(e))
