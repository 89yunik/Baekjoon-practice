const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = Number(input[0])
let answer = 0
for (let i = 1; i <= N; i++) {
  const word = input[i]
  const check = {}
  answer++
  for (const j in word) {
    if (check[word[j]] && word[j - 1] !== word[j]) {
      answer--
      break
    }
    check[word[j]] = true
  }
}
console.log(answer)
