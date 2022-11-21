const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M, B] = I[0].split(' ').map(Number)
let A = []
for (let i = 1; i <= N; i++) A.push(I[i].split(' ').map(Number))
A = A.flat()
let [l, r] = [Math.min(...A), Math.max(...A)]
let O = [Infinity, r]
let block = A.reduce((a, b) => a + b - r, B)
for (let i = r; i >= l; i--) {
  if (block >= 0) {
    const time = A.reduce((a, b) => a + (b > i ? 2 * (b - i) : i - b), 0)
    if (O[0] < Infinity && O[0] <= time) break
    else O = [time, i]
  }
  block += N * M
}
console.log(O.join(' '))
