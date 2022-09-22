const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = parseInt(input[0])
let [x, i, b] = [0, 0, 0]
for (i = 1; x + i < N; i++) {
  x += i
}

const numerator = i % 2 !== 0 ? i + 1 - (N - x) : N - x
const denominator = i % 2 !== 0 ? N - x : i + 1 - (N - x)

console.log(numerator + '/' + denominator)
