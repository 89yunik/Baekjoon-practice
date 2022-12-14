let [N, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
N = +N
I.pop()
I = I.map(Number)
let [buffer, i, j] = [Array(100000), 0, 0]
I.forEach(e => {
  e && j - i < N && (buffer[j++] = e)
  !e && i++
})
console.log(buffer.slice(i, j).join(' ') || 'empty')
