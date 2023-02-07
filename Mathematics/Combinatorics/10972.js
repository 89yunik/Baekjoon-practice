let [[N], I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(e => e.split(' ').map(Number))
let o = -1
l: for (let i = N - 2; i >= 0; i--)
  if (I[i] < I[i + 1])
    for (let j = N - 1; j > i; j--)
      if (I[i] < I[j]) {
        ;[I[i], I[j]] = [I[j], I[i]]
        o = [
          ...I.slice(0, i + 1),
          ...I.slice(i + 1).sort((a, b) => a - b),
        ].join(' ')
        break l
      }
console.log(o)
// let o = -1
// l: for (let i = N - 1; i; i--)
//   if (I[i - 1] < I[i])
//     for (let j = N - 1; j >= i; j--)
//       if (I[i - 1] < I[j]) {
//         ;[I[i - 1], I[j]] = [I[j], I[i - 1]]
//         o = [...I.slice(0, i), ...I.slice(i).sort((a, b) => a - b)].join(' ')
//         break l
//       }
// console.log(o)
// function F() {
//   for (let i = N - 1; i; i--)
//     if (I[i - 1] < I[i])
//       for (let j = N - 1; j >= i; j--)
//         if (I[i - 1] < I[j]) {
//           ;[I[i - 1], I[j]] = [I[j], I[i - 1]]
//           return [...I.slice(0, i), ...I.slice(i).sort((a, b) => a - b)].join(
//             ' ',
//           )
//         }
//   return -1
// }
// console.log(F())
