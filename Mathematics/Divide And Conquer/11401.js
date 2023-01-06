let [N, K] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(BigInt)
const p = 1000000007n
function fac(s, e) {
  let x = s
  for (let i = s + 1n; i <= e; i++) x = (x * i) % p
  return x
}
function pow(x, k) {
  if (k == 1n) return x
  let a = pow((x * x) % p, ~~(k / 2n))
  if (k % 2n) a *= x
  return a % p
}
console.log(
  (N > K ? (fac(K + 1n, N) * pow(fac(1n, N - K), p - 2n)) % p : 1).toString(),
)
