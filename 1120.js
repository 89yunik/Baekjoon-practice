const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
function compare(a, b) {
  let cnt = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) cnt++
  }
  return cnt
}
const [A, B] = input.shift().split(' ')
const [Alength, Blength] = [A.length, B.length]
const diff = Blength - Alength
let answer = Infinity
if (!diff) {
  answer = compare(A, B)
} else {
  for (let i = 0; i <= diff; i++) {
    const AB = B.substring(0, i) + A + B.substring(Alength + i, Blength)
    answer = Math.min(answer, compare(AB, B))
  }
}
console.log(answer)
