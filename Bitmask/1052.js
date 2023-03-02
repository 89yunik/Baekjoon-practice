let [N, K] = `${require('fs').readFileSync('./dev/stdin')}`.trim().split` `.map(
  Number,
)
let o = 0
while (N.toString(2).replace(/0/g, '').length > K) {
  const n = N.toString(2).split``.reverse()
  let i = 0
  for (; i < n.length; i++) if (n[i] == 1) break
  o += 2 ** i
  N += 2 ** i
}
console.log(o)
