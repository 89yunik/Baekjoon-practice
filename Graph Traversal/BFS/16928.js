let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = I[0].split(' ').map(Number)
const A = new Array(101).fill().map((_, i) => i)
for (let i = 1; i <= M + N; i++) {
  const [a, b] = I[i].split(' ').map(Number)
  A[a] = b
}
let [V, Q, i, cnt, o] = [Array(101).fill(0), [1], 0, 1, 0]
while (i < Q.length) {
  const curr = Q[i++]
  if (!cnt--) {
    cnt = Q.length - i
    o++
  }
  if (V[curr]) continue
  V[curr] = 1
  if (curr == 100) break
  for (let j = 1; j < 7; j++) Q.push(A[curr + j])
}
console.log(o)
