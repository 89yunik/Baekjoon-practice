let [N, O, A] = [
  +require('fs').readFileSync('./dev/stdin').toString(),
  [],
  [...Array(10)].map((_, i) => i),
]
function C(A, r) {
  if (r == 1) return [...A]
  let B = []
  for (let i = 0; i < A.length; i++)
    B.push(...C(A.slice(i + 1), r - 1).map(e => +[e, A[i]].join('')))
  return B
}
for (let i = 1; i <= 10; i++) O.push(...C(A, i))
O.sort((a, b) => a - b)
console.log(N < O.length ? O[N] : -1)
