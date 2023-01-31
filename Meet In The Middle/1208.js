let [[N, S], I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let [[N, S], I] = [[40, 1000000], [...Array(40)].map((_, i) => i * 100000)]
let [Sum, o, M] = [new Map(), 0, ~~(N / 2)]
function F(i, sum, x, G) {
  if (i == x) {
    G(sum)
    return
  }
  F(i + 1, sum, x, G)
  F(i + 1, sum + I[i], x, G)
}
F(0, 0, M, sum => Sum.set(sum, (Sum.get(sum) ?? 0) + 1))
F(M, 0, N, sum => (o += Sum.get(S - sum) ?? 0))
if (!S) --o
console.log(o)
