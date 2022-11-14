const fs = require('fs')
const I = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const I = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// const [T, n, A, m, B, C] = [
//   +I[0],
//   +I[1],
//   I[2].split(' ').map(Number),
//   +I[3],
//   I[4].split(' ').map(Number),
//   {},
// ]
// for (const i in A) {
//   let x = 0
//   for (let j = +i; j < n; j++) {
//     x += A[j]
//     C[x] = (C[x] ?? 0) + 1
//   }
// }
// let O = 0
// for (const i in B) {
//   let x = 0
//   for (let j = +i; j < m; j++) {
//     x += B[j]
//     if (C[T - x]) O += C[T - x]
//   }
// }
// console.log(O)
const [T, n, A, m, B, C, D] = [
  +I[0],
  +I[1],
  I[2].split(' ').map(Number),
  +I[3],
  I[4].split(' ').map(Number),
  [],
  [],
]
function init(A, C, n) {
  for (const i in A) {
    let x = 0
    for (let j = +i; j < n; j++) {
      x += A[j]
      C.push(x)
    }
  }
}
init(A, C, n)
init(B, D, m)
C.sort((a, b) => a - b)
D.sort((a, b) => a - b)
let [O, i, j] = [0, 0, D.length - 1]
while (i < C.length && j >= 0) {
  if (C[i] + D[j] < T) i++
  else if (C[i] + D[j] == T) {
    let [k, l] = [i + 1, j - 1]
    while (C[i] == C[k]) k++
    while (D[j] == D[l]) l--
    O += (k - i) * (j - l)
    ;[i, j] = [k, l]
  } else j--
}
console.log(O)
