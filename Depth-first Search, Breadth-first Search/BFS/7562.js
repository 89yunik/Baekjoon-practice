let [[], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
let O = []
for (let i = 0; i < I.length; i += 3) {
  const [[l], s, e] = [I[i], I[i + 1], I[i + 2]]
  let [Q, V, o, cnt, j] = [
    [s],
    [...Array(l)].map(_ => Array(l).fill(0)),
    0,
    1,
    0,
  ]
  V[s[0]][s[1]]++
  while (j < Q.length) {
    const [x, y] = Q[j++]
    if (!cnt--) {
      cnt = Q.length - j
      o++
    }
    if (x == e[0] && y == e[1]) break
    const next = [
      [x - 2, y - 1],
      [x - 2, y + 1],
      [x - 1, y - 2],
      [x - 1, y + 2],
      [x + 1, y - 2],
      [x + 1, y + 2],
      [x + 2, y - 1],
      [x + 2, y + 1],
    ]
    for (const [nx, ny] of next)
      if (nx >= 0 && nx < l && ny >= 0 && ny < l && !V[nx][ny]) {
        V[nx][ny]++
        Q.push([nx, ny])
      }
  }
  O.push(o)
}
console.log(O.join('\n'))
