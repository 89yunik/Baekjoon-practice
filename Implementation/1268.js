let [[N], ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
let O = [...Array(N)].map(_ => new Set())
I.forEach((r, idx) =>
  r.forEach((e, j) => {
    for (let i = 0; i < N; i++) if (i != idx && e == I[i][j]) O[idx].add(i)
  }),
)
O = O.map(e => e.size)
console.log(O.indexOf(Math.max(...O)) + 1)
