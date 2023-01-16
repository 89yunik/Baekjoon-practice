let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
I.pop()
let [i, O] = [0, []]
while (i < I.length) {
  const [w, h] = I[i].split(' ').map(Number)
  const [x, A] = [h + i++, []]
  for (; i <= x; i++) A.push(I[i].split(''))
  let N = []
  for (let j = 0; j < h; j++)
    for (let k = 0; k < w; k++) if (A[j][k] == 'o') N.push([j, k])
  for (let j = 0; j < h; j++)
    for (let k = 0; k < w; k++) if (A[j][k] == '*') N.push([j, k])
  let G = [...Array(N.length)].map(_ => [])
  function bfs(p) {
    const [Q, V] = [[p], [...Array(h)].map(_ => Array(w).fill(0))]
    V[p[0]][p[1]]++
    let [dist, cnt] = [0, 1]
    while (Q.length) {
      const [x, y] = Q.shift()
      if (!cnt--) {
        cnt = Q.length
        dist++
      }
      if ((A[x][y] == '*' || A[x][y] == 'o') && (p[0] != x || p[1] != y)) {
        const s = N.findIndex(([i, j]) => p[0] == i && p[1] == j)
        const e = N.findIndex(([i, j]) => x == i && y == j)
        G[s].push([e, dist])
      }
      const next = [
        [x - 1, y],
        [x, y - 1],
        [x, y + 1],
        [x + 1, y],
      ]
      for (const [nx, ny] of next)
        if (
          nx >= 0 &&
          nx < h &&
          ny >= 0 &&
          ny < w &&
          A[nx][ny] != 'x' &&
          !V[nx][ny]
        ) {
          V[nx][ny]++
          Q.push([nx, ny])
        }
    }
  }
  N.forEach(p => bfs(p))
  let [o, V] = [Infinity, Array(N.length).fill(0)]
  function dfs(x, dist) {
    if (!V.includes(0) && (o = Math.min(o, dist))) return
    for (const [nx, ndist] of G[x])
      if (!V[nx]) {
        V[nx]++
        dfs(nx, dist + ndist)
        V[nx]--
      }
  }
  V[0]++
  dfs(0, 0)
  O.push(o == Infinity ? -1 : o)
}
console.log(O.join('\n'))
