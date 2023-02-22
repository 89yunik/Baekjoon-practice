let [[N, M], ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
let o = 2 * N * M
function F(s, s2, C) {
  for (let i = 0; i < N; i++) {
    o += I[i][s]
    for (let j = 0; j < M - 1; j++)
      if (C(I[i][j], I[i][j + 1])) o += Math.abs(I[i][j + 1] - I[i][j])
  }
  for (let j = 0; j < M; j++) {
    o += I[s2][j]
    for (let i = 0; i < N - 1; i++)
      if (C(I[i][j], I[i + 1][j])) o += Math.abs(I[i + 1][j] - I[i][j])
  }
}
F(0, 0, (a, b) => a < b)
F(M - 1, N - 1, (a, b) => a > b)
console.log(o)
