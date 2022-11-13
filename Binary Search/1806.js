const fs = require('fs')
const I = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const I = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const [[N, S], A] = [I[0].split(' ').map(Number), I[1].split(' ').map(Number)]
// let l = (r = 0)
// let [sum, O] = [A[0], N + 1]
// while (sum) {
//   if (sum < S) sum += A[++r]
//   else {
//     O = Math.min(O, r - l + 1)
//     sum -= A[l++]
//   }
// }
// if (O == N + 1) O = 0
// console.log(O)
const sum = A.reduce((a, b) => a + b, 0)
let O = 0
if (sum >= S) {
  let [l, r] = [1, N]
  while (l < r) {
    const m = Math.floor((l + r) / 2)
    let sSum = 0
    for (let i = 0; i < m; i++) sSum += A[i]
    let max = sSum
    for (let i = m; i < N; i++) {
      sSum += A[i] - A[i - m]
      if (sSum > max) max = sSum
    }
    max < S ? (l = m + 1) : (r = m)
  }
  O = r
}
console.log(O)
