let [[N, M], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let [N, M] = [50, 1]
// let I = [...Array(N)].map(_ => Array(N).fill(1))
// I[0][0]++
const [S, E] = [[], []]
for (let i = 0; i < N; i++)
  for (let j = 0; j < N; j++)
    if (I[i][j] == 1) S.push([i, j])
    else if (I[i][j] == 2) E.push([i, j])
function C(A, r) {
  const R = []
  if (r == 1) return A.map(e => [e])
  for (let i = 0; i < A.length; i++)
    R.push(...C(A.slice(i + 1), r - 1).map(e => [A[i], ...e]))
  return R
}
let A = [...Array(E.length)].map((_, i) => i)
A = C(A, M)
let o = Infinity
A.forEach(e => {
  let x = 0
  const E1 = E.filter((_, i) => e.includes(i))
  S.forEach(([x1, y1]) => {
    let y = Infinity
    E1.forEach(
      ([x2, y2]) => (y = Math.min(y, Math.abs(x1 - x2) + Math.abs(y1 - y2))),
    )
    x += y
  })
  o = Math.min(o, x)
})
console.log(o)
