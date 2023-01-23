let [[], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').reduce((a, b) => +a + +b))
let N = 2000000
let [A, B, O] = [Array(N).fill(1), [], []]
for (let i = 2; i < N; i++)
  if (A[i]) {
    B.push(i)
    for (let j = i * 2; j < N; j += i) A[j] = 0
  }
function F(n) {
  if (n < 2) return 0
  if (n < N) return A[n]
  for (let x of B) if (!(n % x)) return 0
  return 1
}
I.forEach(e => {
  let o = 'YES'
  if (e == 2 || (e % 2 && !F(e - 2))) o = 'NO'
  O.push(o)
})
console.log(O.join('\n'))
