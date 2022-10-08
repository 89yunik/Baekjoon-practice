const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const T = Number(input[0])
let answer = ''
for (let i = 0; i < T; i++) {
  const [R, S] = input[i + 1].split(' ')
  for (let j = 0; j < S.length; j++) {
    answer += S[j].repeat(R)
  }
  answer += '\n'
}
answer = answer.replace(/\n$/, '')
console.log(answer)
