let [[N], A] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let [[N], A] = [[1000000], Array(1000000).fill(1)]
const [B, C] = [[], []]
for (let x of A) {
  let [l, r] = [0, B.length]
  while (l < r) {
    const mid = ~~((l + r) / 2)
    B[mid] < x ? (l = mid + 1) : (r = mid)
  }
  B[l] = x
  C.push([l, x])
}
let x = B.length - 1
for (let i = N - 1; i >= 0; i--)
  if (C[i][0] == x) {
    B[x] = C[i][1]
    x--
  }
console.log(`${B.length}\n${B.join(' ')}`)
