let [, ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(Number)
I.sort((a, b) => b - a)
let o = 0
while (I.length > 1) {
  const [x, y] = [I.pop(), I.pop()]
  const [z, L] = [x + y, I.length - 1]
  let [l, r] = [0, L]
  while (l < r) {
    const mid = ~~((l + r) / 2)
    z > I[mid] ? (r = mid) : (l = mid + 1)
  }
  I.splice(z > I[L] ? r : L, 0, z)
  o += z
}
console.log(o)
