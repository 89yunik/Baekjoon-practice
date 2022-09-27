const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input.shift())
const sorted = input.map(e => Number(e)).sort((a, b) => a - b)
const sum = sorted.reduce((prev, curr) => prev + curr, 0)
let cnt = 1
let modeArr = new Array(N + 1).fill().map(_ => [])
for (let i = 0; i < sorted.length; i += cnt) {
  cnt = 1
  while (sorted[i + cnt] === sorted[i]) {
    cnt++
  }
  modeArr[cnt].push(sorted[i])
}
modeArr = modeArr.reverse().find(e => e.length)
const mode = modeArr.length > 1 ? modeArr[1] : modeArr[0]
console.log(Math.round(sum / N) === -0 ? 0 : Math.round(sum / N))
console.log(sorted[(N - 1) / 2])
console.log(mode)
console.log(sorted[N - 1] - sorted[0])
