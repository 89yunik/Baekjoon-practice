let [[N], A] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
A.sort((a, b) => a - b)
let [num, abs, O] = [Infinity, (i, j, k) => Math.abs(A[i] + A[j] + A[k]), []]
for (let i = 0; i < N; i++) {
  let k = N - 1
  for (let j = i + 1; j < k; j++) {
    while (k > j + 1 && abs(i, j, k) > abs(i, j, k - 1)) k--
    if (num > abs(i, j, k)) {
      num = abs(i, j, k)
      O = [A[i], A[j], A[k]]
    }
  }
}
console.log(O.join(' '))
