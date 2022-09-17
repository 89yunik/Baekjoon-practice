// baekjoon 1039
const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().split('\r\n')

let [N, K] = input[0].split(' ')
K = parseInt(K)
let result = -1
if (N.length !== 1 && parseInt(N.slice(1, N.length)) !== 0) {
  const arrayN = N.split('')
  console.log(arrayN)
}
console.log(result)
