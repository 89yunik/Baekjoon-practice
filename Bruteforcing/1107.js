let [N, M, A] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
A = new Set(A && A.split(' '))
let [l, r, O] = [N, N, [Math.abs(+N - 100)]]
const check = x => x.split('').every(e => !A.has(e))
if (M < 10) {
  while (!check(l) && !check(r)) {
    if (l >= 0) l = (l - 1).toString()
    r = (+r + 1).toString()
  }
  check(l) && O.push(+N - l + l.length)
  check(r) && O.push(r - +N + r.length)
}
console.log(Math.min(...O))
