const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(Number)
const A = input[1].split(' ').map(Number)
let [l, r] = [0, Math.max(...A)]
while (l < r) {
  const mid = Math.ceil((l + r) / 2)
  let x = 0
  for (let i = 0; i < N; i++) if (A[i] > mid) x += A[i] - mid
  x >= M ? (l = mid) : (r = mid - 1)
}
console.log(l)
