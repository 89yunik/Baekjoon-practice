const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = parseInt(input.shift())
const A = input[0].split(' ').map(e => parseInt(e))
let answerIndex = new Array(N).fill(-1)
let answer = ''
for (let i = N - 1; i >= 0; i--) {
  let cnt = i + 1
  while (A[i] >= A[cnt] && cnt < N) {
    cnt = answerIndex[cnt]
  }
  answerIndex[i] = cnt
  answer = (A[cnt] || -1) + ' ' + answer
}
console.log(answer)
