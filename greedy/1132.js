const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0]
const charNum = new Array(10).fill(0)
const num = Array.from({length: 9}, (_, i) => 9 - i)
const canZero = new Array(10).fill(true)
for (let i = 1; i <= N; i++) {
  const string = input[i]
  for (const j in string) {
    const char = string[j]
    const digit = string.length - j - 1
    const index = char.charCodeAt(0) - 65
    if (j == 0) canZero[index] = false
    charNum[index] += Math.pow(10, digit)
  }
}
let min = canZero.indexOf(true)
for (let i = min + 1; i < 10; i++) {
  if (canZero[i]) {
    if (charNum[min] >= charNum[i]) min = i
  }
}
charNum.splice(min, 1)
charNum.sort((a, b) => b - a)
const answer = num.reduce((prev, curr, i) => prev + curr * charNum[i], 0)
console.log(answer)
