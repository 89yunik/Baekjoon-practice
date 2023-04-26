const [[n], Ai, [s]] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
let [V, o] = [Array(n).fill(0), 1]
function dfs(c) {
  for (i of [c - Ai[c], c + Ai[c]])
    if (i >= 0 && i < n && !V[i] && ++V[i] && ++o) dfs(i)
}
V[s - 1] = 1
dfs(s - 1)
console.log(o)
