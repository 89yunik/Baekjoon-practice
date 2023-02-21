let [[N, K], [X]] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `)
const S = []
for (let i in X) {
  while (S.length && S[S.length - 1] < X[i] && K > 0 && S.pop()) K--
  S.push(X[i])
}
console.log(S.join``.slice(0, S.length - K))
