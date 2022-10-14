const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const S = input[0]
const num = [0, 0]
num[S[0]]++
for (let i = 0; i < S.length - 1; i++) {
  if (S[i] !== S[i + 1]) {
    num[S[i + 1]]++
  }
}
console.log(Math.min(...num))
