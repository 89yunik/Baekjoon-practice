let [[H, W], [N], ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
let [o, F] = [0, (x, y) => !((x > H || y > W) && (x > W || y > H))]
I.forEach(([a, b], i) => {
  for (let j = i + 1; j < N; j++) {
    const [c, d] = I[j]
    if (
      F(Math.max(a, c), b + d) ||
      F(Math.max(a, d), b + c) ||
      F(Math.max(b, c), a + d) ||
      F(Math.max(b, d), a + c)
    )
      o = Math.max(o, a * b + c * d)
  }
})
console.log(o)
