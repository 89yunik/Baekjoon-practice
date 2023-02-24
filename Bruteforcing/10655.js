let [[N], ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
let [l, c] = [0, I[0]]
const len = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
for (let i = 1; i < N; i++) {
  l += len(c, I[i])
  c = I[i]
}
let x = 0
for (let i = 1; i < N - 1; i++)
  x = Math.max(
    x,
    len(I[i + 1], I[i]) + len(I[i], I[i - 1]) - len(I[i + 1], I[i - 1]),
  )
console.log(l - x)
