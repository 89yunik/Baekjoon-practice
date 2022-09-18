const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const N = parseInt(input.shift())
const A = input[0].split(' ').map(e => parseInt(e))
let answer = ''
let j = 1
for (let i = 0; i < N; i = j) {
  while (A[i] >= A[j] && j < N) {
    j++
  }
  if (j === N) {
    answer += '-1'
    j = i + 1
  } else {
    const value = new Array(j - i).fill(A[j]).join(' ')
    answer += value
  }
  answer += ' '
}
console.log(answer.slice(0, answer.length - 1))
