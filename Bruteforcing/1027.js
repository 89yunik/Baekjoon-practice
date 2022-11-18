const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, A] = [+input[0], input[1].split(' ').map(Number)]
const G = (x, y) => (A[x] - A[y]) / (x - y)
function canSee(x, y) {
  for (let i = x + 1; i < y; i++) if (G(x, i) >= G(x, y)) return 0
  return 1
}
let output = 0
for (let i = 0; i < N; i++) {
  let num = 0
  for (let j = i - 1; j >= 0; j--) num += canSee(j, i)
  for (let j = i + 1; j < N; j++) num += canSee(i, j)
  if (num > output) output = num
}
console.log(output)
