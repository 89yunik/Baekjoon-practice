let [[N], ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
function F(M) {
  let [V, n] = [[...Array(N)].map(_ => Array(N).fill(0)), 0]
  function dfs(x, y) {
    V[x][y] = 1
    const next = [
      [x - 1, y],
      [x, y - 1],
      [x, y + 1],
      [x + 1, y],
    ]
    next.forEach(
      ([nx, ny]) => I[nx] && I[nx][ny] > M && !V[nx][ny] && dfs(nx, ny),
    )
  }
  for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++) if (!V[i][j] && I[i][j] > M && ++n) dfs(i, j)
  return n
}
let o = 0
for (let i = 0; i < 100; i++) o = Math.max(F(i), o)
console.log(o)
