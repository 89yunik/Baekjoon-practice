const [[N], ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
const G = [...Array(N + 1)].map(_ => [])
I.forEach(([A, B]) => G[B].push(A))
let [max, O] = [0, []]
for (let i = 1; i <= N; i++) {
  let [V, o] = [Array(N + 1).fill(0), 1]
  const dfs = c => {
    V[c]++
    for (let i = 0; i < G[c].length; i++) {
      const n = G[c][i]
      !V[n] && ++o && dfs(n, V)
    }
  }
  dfs(i, V)
  max == o && O.push(i)
  max < o && (O = [i]) && (max = o)
}
console.log(O.join` `)
