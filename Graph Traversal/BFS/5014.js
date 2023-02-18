let [F, S, G, U, D] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split` `.map(Number)
let [o, Q, n, cnt, V] = ['use the stairs', [S], 0, 1, Array(F + 1).fill(0)]
V[S]++
while (Q.length) {
  const x = Q.shift()
  if (!cnt-- && ++n) cnt = Q.length
  if (x == G) {
    o = n
    break
  }
  if (x + U <= F && !V[x + U] && ++V[x + U]) Q.push(x + U)
  if (x > D && !V[x - D] && ++V[x - D]) Q.push(x - D)
}
console.log(o)
