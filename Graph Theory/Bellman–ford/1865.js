let [[TC], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
let [O, i] = [[], 0]
while (i < I.length) {
  const [N, M, W] = I[i]
  const [x, y] = [M + i, M + W + i]
  const A = [...Array(N + 1)].map(_ => Array(N + 1).fill(Infinity))
  while (++i <= y) {
    const [S, E, T] = I[i]
    if (i > x) A[S][E] = Math.min(A[S][E], -T)
    else {
      A[S][E] = Math.min(A[S][E], T)
      A[E][S] = Math.min(A[E][S], T)
    }
  }
  let o = 'NO'
  for (let j = 1; j <= N; j++)
    for (let k = 1; k <= N; k++)
      for (let l = 1; l <= N; l++) {
        A[k][l] = Math.min(A[k][l], A[k][j] + A[j][l])
        if (k == l && A[k][l] < 0 && (o = 'YES')) break
      }
  // for (let j = 1; j <= N; j++) if (A[j][j] < 0 && (o = 'YES')) break
  O.push(o)
}
console.log(O.join('\n'))
