let [[N, C], I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let [[N, C], I] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
// function F(N, C) {
//   if (C < 0) return 0
//   if (N == 0) return 1
//   return F(N - 1, C) + F(N - 1, C - I[N - 1])
// }
// console.log(F(N, C))
