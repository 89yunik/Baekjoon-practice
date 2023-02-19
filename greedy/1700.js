let [[N, K], I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
// let [[N], I] = [[2], [...Array(100)].map((_, i) => i + 1)]
let [o, A] = [0, []]
for (let i = 0; i < K; i++) {
  if (!A.includes(I[i]))
    if (A.length < N) A.push(I[i])
    else {
      let x = 0
      for (let j = 0; j < A.length; j++)
        if (I.slice(i).indexOf(A[j]) == -1) {
          x = j
          break
        } else if (I.slice(i).indexOf(A[j]) > I.slice(i).indexOf(A[x])) x = j
      A[x] = I[i]
      o++
    }
}
console.log(o)
