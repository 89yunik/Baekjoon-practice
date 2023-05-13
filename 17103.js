let [, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(Number)
const max = 1000001
const [V, A] = [Array(max).fill(1), new Set()]
for (let i = 2; i < max; i++)
  if (V[i]) {
    A.add(i)
    for (let j = i + i; j < max; j += i) V[j] = 0
  }
console.log(
  I.map(N => {
    let o = 0
    for (const x of A)
      if (A.has(N - x))
        if (x == N - x) o++
        else o += 0.5
    return o
  }).join`\n`,
)
