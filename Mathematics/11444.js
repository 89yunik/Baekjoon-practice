let n = BigInt(require('fs').readFileSync('./dev/stdin').toString())
// .trim()
// .split('\r\n')
// .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
let [A, O] = [
  [
    [1n, 1n],
    [1n, 0n],
  ],
  [
    [1n, 0n],
    [0n, 1n],
  ],
]
function mul(A, B) {
  const C = [...Array(2)].map(_ => Array(2).fill(0n))
  for (let i = 0; i < 2; i++)
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) C[i][j] += A[i][k] * B[k][j]
      C[i][j] %= 1000000007n
    }
  return C
}
while (n) {
  if (n % 2n) O = mul(O, A)
  A = mul(A, A)
  n = ~~(n / 2n)
}
console.log(O[0][1].toString())

// n = n.toString(2)
// const l = n.length
// let A = [
//   [
//     [1n, 1n],
//     [1n, 0n],
//   ],
// ]
// function mul(A, B) {
//   const C = [...Array(2)].map(_ => Array(2).fill(0n))
//   for (let i = 0; i < 2; i++)
//     for (let j = 0; j < 2; j++) {
//       for (let k = 0; k < 2; k++) C[i][j] += A[i][k] * B[k][j]
//       C[i][j] %= 1000000007n
//     }
//   return C
// }
// for (let i = 1; i < l; i++) A.push(mul(A[A.length - 1], A[A.length - 1]))
// console.log(
//   A.filter((_, i) => n[l - 1 - i] == 1)
//     .reduce(
//       (a, b) => mul(a, b),
//       [
//         [1n, 0n],
//         [0n, 1n],
//       ],
//     )[0][1]
//     .toString(),
// )
