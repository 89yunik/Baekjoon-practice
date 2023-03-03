let [, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
let [i, O] = [0, []]
while (i < I.length) {
  const [[N, K], D] = [I[i], [0, ...I[++i]]]
  const [x, G, In] = [
    ++i + K,
    [...Array(N + 1)].map(_ => []),
    Array(N + 1).fill(0),
  ]
  for (; i < x; i++) {
    const [a, b] = I[i]
    G[a].push(b)
    In[b]++
  }
  const [W] = I[i++]
  const [Q, dp] = [[], Array(N + 1).fill(0)]
  In.forEach((e, i) => i && !e && Q.push(i) && (dp[i] = D[i]))
  while (Q.length) {
    const c = Q.shift()
    G[c].forEach(n => {
      !--In[n] && Q.push(n)
      dp[n] = Math.max(dp[n], dp[c] + D[n])
    })
  }
  O.push(dp[W])
}
console.log(O.join`\n`)
