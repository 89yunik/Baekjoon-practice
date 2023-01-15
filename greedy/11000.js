let [[], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
I = I.map(([s, e]) => [
  [s, 0],
  [e, 1],
])
  .flat()
  .sort((a, b) => a[0] - b[0] || b[1] - a[1])
let [o, room] = [0, 0]
I.forEach(([, isE]) => (o = Math.max(o, isE ? --room : ++room)))
console.log(o)
