let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [[N, M], A, O] = [I[0].split(' ').map(Number), new Map(), []]
for (let i = 1; i <= N; i++) {
  const [site, pw] = I[i].split(' ')
  A.set(site, pw)
}
for (let i = N + 1; i < N + M + 1; i++) O.push(A.get(I[i]))
console.log(O.join('\n'))
// const [N, M, K] = I.shift().split(' ').map(Number)
// I = I.map(r => r.split('').map(e => (e == 'B' ? 1 : 0)))
// const check = (i, j) => (I[i][j] == (i + j) % 2 ? 1 : 0)
// function prefixSum(x, y, num) {
//   if (x > N - K || y > M - K) return num
//   if ((!(x % 2) && x == N - 1) || (x % 2 && x == 0)) {
//     console.log(x, y, num, 'test1')
//     for (let i = 0; i < K; i++) num += check(x + i, y + K) - check(x + i, y)
//     prefixSum(x, y + 1, num)
//   } else {
//     console.log(x, y, num, 'test2')
//     for (let i = 0; i < K; i++) num += check(x + K, y + i) - check(x, y + i)
//     const n = x % 2 ? -1 : 1
//     prefixSum(x + n, y, num)
//   }
// }
// let num = 0
// for (let i = 0; i < K; i++) for (let j = 0; j < K; j++) check(i, j) && num++
// console.log(prefixSum(0, 0, num))
// let [x, y] = [0, 1]
// while (x <= N - K && y <= M - K && x >= 0 && y >= 0) {
//   let [wTemp, bTemp] = [w, b]
//   if (y && y != M - K) {
//     for (let i = 0; i < K; i++) {
//       const next =
//         check(x + i, y + (x % 2 ? 1 : -1)) -
//         check(x + i, y + (x % 2 ? 1 - K : K - 1))
//       wTemp -= next
//       bTemp += next
//     }
//     y += x % 2 ? 1 : -1
//   } else {
//     x++
//   }
//   w = Math.min(w, wTemp)
//   b = Math.min(b, bTemp)
// }
