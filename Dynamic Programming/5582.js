let [A, B] = `${require('fs').readFileSync('./dev/stdin')}`.trim().split`\r\n`
let [l, r, o] = [0, 0, 0]
while (r <= A.length)
  if (B.includes(A.slice(l, r))) o = Math.max(o, r++ - l)
  else l++
console.log(o)
// let [a, b] = [A.length, B.length]
// const dp = [...Array(a)].map(_ => Array(b).fill(0))
// for (let i = 0; i < a; i++) if (A[i] == B[0]) dp[i][0] = 1
// for (let i = 0; i < b; i++) if (A[0] == B[i]) dp[0][i] = 1
// for (let i = 1; i < a; i++)
//   for (let j = 1; j < b; j++) if (A[i] == B[j]) dp[i][j] = dp[i - 1][j - 1] + 1
// console.log(dp.reduce((A, B) => Math.max(A, ...B), 0))
