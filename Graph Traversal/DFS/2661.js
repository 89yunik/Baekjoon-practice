let N = +require('fs').readFileSync('./dev/stdin').toString()
// .trim()
// .split('\r\n')
// .map(e => e.split(' ').map(Number))
function F(x) {
  let l = x.length
  for (let j = 1; j <= l / 2; j++)
    if (x.slice(l - j * 2, l - j) == x.slice(l - j)) return 0
  return 1
}
let S = ['']
while (S.length) {
  const x = S.pop()
  if (x.length == N && (o = x)) break
  const next = [x + 3, x + 2, x + 1]
  next.forEach(nx => F(nx) && S.push(nx))
}
console.log(o)
// let dp = [...Array(N + 1)].map(_ => [])
// dp[0].push('')
// for (let i = 1; i <= N; i++)
//   for (let e of dp[i - 1]) {
//     if (dp[i].length >= 2) break
//     F(e + 1) && dp[i].push(e + 1)
//     F(e + 2) && dp[i].push(e + 2)
//     F(e + 3) && dp[i].push(e + 3)
//   }
// console.log(dp[N][0])
