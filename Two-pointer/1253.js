let [[N], I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
I.sort((a, b) => a - b)
let o = 0
for (let i = 0; i < N; i++) {
  let [l, r] = [0, N - 1]
  while (l < r)
    if (i == l || I[l] + I[r] < I[i]) l++
    else if (i == r || I[l] + I[r] > I[i]) r--
    else if (++o) break
}
console.log(o)
// I.sort((a, b) => a - b)
// let o = 0
// for (let i = 0; i < N; i++)
//   l: for (let j = 0; j < N; j++)
//     for (let k = j + 1; k < N; k++)
//       if (i == j || I[j] + I[k] > I[i]) break
//       else if (i != k && I[j] + I[k] == I[i] && ++o) break l
// console.log(o)
