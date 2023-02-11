let A = `${require('fs').readFileSync('./dev/stdin')}`.trim().split` `.map(
  Number,
)
const B = [15, 19, 28]
;[A[1], A[2]] = [A[2], A[1]]
const x = A.indexOf(Math.min(...A))
const m = A[x]
A = A.map(e => e - m)
let i = 0
for (; !B.every((e, j) => i % e == A[j]); i += B[x]) {}
console.log(i + m)
