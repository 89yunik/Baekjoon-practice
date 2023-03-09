let N = +require('fs').readFileSync('./dev/stdin').toString()
// .trim()
// .split('\r\n')
// .map(e => e.split(' ').map(Number))
let max = 1003001
let A = Array(max + 1).fill(1)
A[1]--
for (let i = 2; i <= max; i++)
  if (A[i]) for (let j = i + i; j <= max; j += i) A[j] = 0
function F(n) {
  n = n.toString()
  const l = n.length
  for (let i = ~~(l / 2); i < l; i++) if (n[i] != n[l - 1 - i]) return 0
  return 1
}
for (let i = N; i <= max; i++) if (A[i] && F(i) && !console.log(i)) break
