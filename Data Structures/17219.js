let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [[N, M], A, O] = [I[0].split(' ').map(Number), new Map(), []]
for (let i = 1; i <= N; i++) {
  const [site, pw] = I[i].split(' ')
  A.set(site, pw)
}
for (let i = N + 1; i < N + M + 1; i++) O.push(A.get(I[i]))
console.log(O.join('\n'))
