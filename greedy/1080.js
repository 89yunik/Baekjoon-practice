const {BADFLAGS} = require('dns')
const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
//1080

function swap(x, y) {
  for (let i = x; i < x + 3; i++)
    for (let j = y; j < y + 3; j++) A[i][j] = Number(!A[i][j])
  cnt++
}

function equal(a, b) {
  for (let i = 0; i < N; i++)
    for (let j = 0; j < M; j++) if (a[i][j] !== b[i][j]) return false
  return true
}

const [N, M] = input[0].split(' ').map(Number)
const [A, B] = [[], []]
let cnt = 0
for (let i = 1; i <= N; i++) A.push(input[i].split('').map(Number))
for (let i = N + 1; i <= N + N; i++) B.push(input[i].split('').map(Number))
for (let i = 0; i < N - 2; i++)
  for (let j = 0; j < M - 2; j++) if (A[i][j] !== B[i][j]) swap(i, j)
const output = equal(A, B) ? cnt : -1
console.log(output)
