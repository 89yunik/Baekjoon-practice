let [[N], ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
const [G, deg, O, Q, V] = [
  [...Array(N + 1)].map(_ => []),
  Array(N + 1).fill(0),
  [],
  [],
  Array(N + 1).fill(0),
]
I.forEach(([n, ...e]) => {
  for (let i = 0; i < n - 1; i++) {
    G[e[i]].push(e[i + 1])
    deg[e[i + 1]]++
  }
})
deg.forEach((e, i) => i && !e && Q.push(i) && ++V[i])
while (Q.length) {
  const c = Q.shift()
  O.push(c)
  G[c].forEach(e => deg[e]--)
  deg.forEach((e, i) => i && !e && !V[i] && ++V[i] && Q.push(i))
}
console.log(V.reduce((a, b) => a + b, 0) == N ? O.join`\n` : 0)
