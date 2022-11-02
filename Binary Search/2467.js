const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = +input[0]
const A = input[1].split(' ').map(Number)
let [i, j, min, output] = [0, N - 1, Infinity, '']
while (i < j) {
  const sum = A[i] + A[j]
  if (Math.abs(sum) < min) {
    min = Math.abs(sum)
    output = `${A[i]} ${A[j]}`
  }
  sum < 0 ? i++ : j--
}
console.log(output)
// let j = A.findIndex(e => e >= 0)
// let [i, M] = [j >= 0 ? j - 1 : N - 1, []]
// const abs = (A, a, b) => Math.abs(A[a] + A[b])
// const subMin = [abs(A, i - 1, i), abs(A, i, j), abs(A, j, j + 1)]
// const min = Math.min(...subMin.filter(e => e))
// M =
//   min == subMin[0]
//     ? [A[i - 1], A[i]]
//     : min == subMin[1]
//     ? [A[i], A[j]]
//     : [A[j], A[j + 1]]
// while (i >= 0 && j >= 0 && j < N) {
//   while (abs(A, i - 1, j) < abs(A, i, j)) i--
//   if (abs(A, i, j) < abs(M, 0, 1)) M = [A[i], A[j]]
//   j++
// }
// console.log(M.join(' '))
