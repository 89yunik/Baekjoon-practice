let [[n, m], ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
const V = [...Array(n)].map(_ => Array(m).fill(0))
let O = [0, 0]
for (let i = 0; i < n; i++)
  for (let j = 0; j < m; j++)
    if (!V[i][j] && I[i][j] && ++O[0]) {
      let S = 0
      function dfs(x, y) {
        V[x][y]++
        S++
        const N = [
          [x - 1, y],
          [x, y - 1],
          [x, y + 1],
          [x + 1, y],
        ]
        N.forEach(([nx, ny]) => I[nx] && I[nx][ny] && !V[nx][ny] && dfs(nx, ny))
      }
      dfs(i, j)
      O[1] = Math.max(O[1], S)
    }
console.log(O.join`\n`)
