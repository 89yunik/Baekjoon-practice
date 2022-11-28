const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = I[0].split(' ').map(Number)
let A = I[1]
  .split(' ')
  .map(Number)
  .reduce(
    (a, b) => {
      a.push(a[a.length - 1] + b)
      return a
    },
    [0],
  )
const O = []
for (let i = 2; i < M + 2; i++) {
  const [s, e] = I[i].split(' ').map(Number)
  O.push(A[e] - A[s - 1])
}
console.log(O.join('\n'))
