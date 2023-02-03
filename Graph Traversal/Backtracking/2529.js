let [[k], A] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' '))
k = +k
function dfs(B, C) {
  if (x) return
  const l = B.length
  if (l == k + 1 && (x = B.join(''))) return
  for (const i in C)
    if (
      !V[i] &&
      ((A[l - 1] == '<' && B[l - 1] < C[i]) ||
        (A[l - 1] == '>' && B[l - 1] > C[i]))
    ) {
      V[i]++
      dfs([...B, C[i]], C)
      V[i]--
    }
}
let x
const [C, V] = [[...Array(10)].map((_, i) => 9 - i), Array(10).fill(0)]
for (let i = 0; i < 10; i++) {
  V[i]++
  dfs([C[i]], C)
  V[i]--
}
console.log(x)
V.fill(0)
C.reverse()
x = undefined
for (let i = 0; i < 10; i++) {
  V[i]++
  dfs([C[i]], C)
  V[i]--
}
console.log(x)
