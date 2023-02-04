let [[N], I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))
// let [[N], I] = [[1000], [...Array(1000)].map((_, i) => 2 * i)]
I.unshift(0)
for (let i in I)
  for (let j = 0; j <= i / 2; j++) I[i] = Math.max(I[i], I[i - j] + I[j])
console.log(I[N])
// I = I.map((e, i) => [e, i + 1]).sort((a, b) => b[0] / b[1] - a[0] / a[1])
// let V = Array(N + 1).fill(0)
// function dfs(sum, x) {
//   V[x] = sum
//   if (x == N) return
//   for (const [cost, num] of I)
//     if (x + num <= N && V[x + num] < sum + cost) dfs(sum + cost, x + num)
// }
// dfs(0, 0)
// console.log(V[N])
