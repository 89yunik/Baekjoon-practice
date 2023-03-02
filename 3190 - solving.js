let [[N], [K], ...B] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\r\n`.map(e => e.split` `)
// N = +N
// let [A, [L]] = [B.splice(0, K).map(e => e.map(Number)), B.shift()]
// const I = [...Array(N)].map(_ => Array(N).fill(0))
// A.forEach(([x, y]) => I[x - 1][y - 1]++)
// let [H, T, o] = [[0, 1, 0], [0, 0, 0], 0]
// while (H.some((e, i) => e != T[i]) && H.every(e => e < N && e >= 0)) {
//   console.log(H, T)
//   o++
//   I[H[0]][H[1]]
//     ? I[H[0][H[1]]]--
//     : T[2] == 0
//     ? T[1]++
//     : T[2] == 1
//     ? T[0]++
//     : T[2] == 2
//     ? T[1]--
//     : T[0]--
//   H[2] == 0 ? H[1]++ : H[2] == 1 ? H[0]++ : H[2] == 2 ? H[1]-- : H[0]--
//   if (B[0] && B[0][0] == o) {
//     H[2] = B[0][1] == 'D' ? (H[2] + 1) % 4 : H[2] ? H[2] - 1 : 3
//     B.shift()
//   }
// }
// console.log(o)
