let [A, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\r\n`
let [N, M] = A.split` `.map(Number)
const O = ['', 0]
for (let i = 0; i < M; i++) {
  let [B, o] = [{}, 0]
  for (let j = 0; j < N; j++) B[I[j][i]] = B[I[j][i]] ? ++B[I[j][i]] : 1
  B = Object.entries(B).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  O[0] += B[0][0]
  O[1] += N - B[0][1]
}
console.log(O.join`\n`)
