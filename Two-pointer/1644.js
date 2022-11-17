const N = +require('fs').readFileSync('./dev/stdin').toString()
// const N = +require('fs').readFileSync('/dev/stdin').toString()
const [A, visited] = [[], Array(N + 1).fill(0)]
for (let i = 2; i <= N; i++) {
  if (visited[i]) continue
  A.push(i)
  for (let j = 1; i * j <= N; j++) visited[i * j] = 1
}
let [l, O, n, i, j] = [A.length, 0, 0, 0, 0]
while (n >= 0)
  if (n < N) n += A[j++]
  else {
    if (n == N) O++
    n -= A[i++]
  }
console.log(O)
