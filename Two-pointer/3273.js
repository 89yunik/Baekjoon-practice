let [[n], a, [x]] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let [[n], a, [x]] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
a = a.sort((a, b) => a - b)
let [j, o] = [n - 1, 0]
for (let i = 0; i < n; i++) {
  while (a[i] + a[j] > x && i + 1 < j) j--
  a[i] + a[j] == x && o++
}
console.log(o)
