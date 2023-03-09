let [, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
let [i, O] = [0, []]
while (i < I.length) {
  const [[n], A, [m]] = [I[i], I[i + 1], I[i + 2]]
  i += 3
  const [x, adj, deg, Q] = [
    i + m,
    [...Array(n + 1)].map(_ => Array(n + 1).fill(0)),
    Array(n + 1).fill(0),
    [],
  ]
  for (let j = 0; j < n; j++)
    for (let k = j + 1; k < n; k++) {
      adj[A[j]][A[k]]++
      deg[A[k]]++
    }
  let o = []
  for (; i < x; i++) {
    const [a, b] = I[i]
    if (adj[a][b]) {
      adj[a][b]--
      adj[b][a]++
      deg[a]++
      deg[b]--
    } else {
      adj[a][b]++
      adj[b][a]--
      deg[a]--
      deg[b]++
    }
  }
  deg.forEach((e, i) => i && !e && Q.push(i))
  if (!o.length) {
    while (Q.length) {
      const c = Q.shift()
      o.push(c)
      adj[c].forEach((e, n) => e > 0 && !--deg[n] && Q.push(n))
    }
  }
  O.push(o.length == n ? o.join` ` : 'IMPOSSIBLE')
}
console.log(O.join`\n`)
