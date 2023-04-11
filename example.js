let [[N], ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
// let N = 10000
// let I = [...Array(100000)].map((_, i) => [i % N, (i + 1) % N])
const [G, O] = [[...Array(N + 1)].map(_ => []), Array(N + 1).fill(0)]
I.forEach(([A, B]) => G[B].push(A))
function dfs(s) {
  let [S, V, o] = [[s], Array(N + 1).fill(0), 0]
  while (S.length) {
    const c = S.pop()
    V[c]++
    o++
    G[c].forEach(n => !V[n] && S.push(n))
  }
  return o
}
let max = 0
for (let i = 1; i <= N; i++) {
  O[i] = dfs(i)
  max = Math.max(O[i], max)
}
console.log(
  O.reduce((a, b, i) => {
    if (b == max) a.push(i)
    return a
  }, []).join` `,
)
