let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [[N, M], A] = [I[0].split(' ').map(Number), I[1].split(' ').map(Number)]
let [o, B] = [0, [...Array(N)].map((_, i) => N - i)]
A.forEach(e => {
  while (B.indexOf(e) != B.length - 1) {
    if (B.indexOf(e) < B.length / 2 - 1) B.push(B.shift())
    else B.unshift(B.pop())
    o++
  }
  B.pop()
})
console.log(o)
