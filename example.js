let [[C], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' '))
C = +C
let [i, O] = [0, []]
while (i < I.length) {
  const [N, M] = I[i].map(Number)
  let [x, A] = [i++ + N, []]
  for (; i <= x; i++) A.push(I[i][0].split('').map(e => (e == '.' ? 1 : 0)))
  console.log(N, M, A)
}
console.log(O.join('\n'))
