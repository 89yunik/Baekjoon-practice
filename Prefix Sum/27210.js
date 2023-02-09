const [[N], I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
// const [[N], I] = [[100000], Array(100000).fill(2)]
function F(x) {
  const S = Array(N + 1).fill(0)
  S[1] = I[0] == x ? 1 : -1
  for (let i = 1; i < N; i++) S[i + 1] = I[i] == x ? S[i] + 1 : S[i] - 1
  return Math.max(...S) - Math.min(...S)
}
console.log(Math.max(F(1), F(2)))
