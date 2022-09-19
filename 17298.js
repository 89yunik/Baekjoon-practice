const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = parseInt(input.shift())
const A = input[0].split(' ').map(e => parseInt(e))
let answer = new Array(N).fill(-1)
for (let i = N - 2; i >= 0; i--) {
  let cnt = i + 1
  while (A[i] >= A[cnt] && cnt < N) {
    cnt = answer[cnt]
  }
  answer[i] = cnt
}
console.log(answer.map(e => A[e] || -1).join(' '))
