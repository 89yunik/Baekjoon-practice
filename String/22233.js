let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
let [N, M] = I.shift().split(' ').map(Number)
let [A, B, O] = [new Set(I.slice(0, N)), I.slice(N).map(e => e.split(',')), []]
B.forEach(e => {
  e.forEach(k => A.delete(k))
  O.push(A.size)
})
console.log(O.join('\n'))
