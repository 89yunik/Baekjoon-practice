let [[N, K], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))
I.sort((a, b) => b[1] - a[1] || b[2] - a[2] || b[3] - a[3])
let i = I.findIndex(e => e[0] == K)
function F(i) {
  for (let j = 1; j < 4; j++) if (I[i][j] != I[i - 1][j]) return 0
  return 1
}
while (i && F(i)) i--
console.log(i + 1)
