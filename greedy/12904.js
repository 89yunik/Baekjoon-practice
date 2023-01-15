let [S, T] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(''))
while (S.length < T.length) {
  const x = T.pop()
  if (x == 'B') T.reverse()
}
console.log(+(S.join('') == T.join('')))
