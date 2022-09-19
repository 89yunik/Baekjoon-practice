const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const n = parseInt(input.shift())
const stack = []
let answer = ''
let cnt = 1
for (let i = 0; i < n; i++) {
  const num = parseInt(input[i])
  while (cnt <= num) {
    stack.push(cnt)
    answer += '+' + '\n'
    cnt++
  }
  const max = stack.pop()
  if (max !== num) {
    answer = 'NO'
    break
  }
  answer += '-'
  if (i < n - 1) {
    answer += '\n'
  }
}
console.log(answer)
