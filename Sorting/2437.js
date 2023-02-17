let [[N], I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
I.sort((a, b) => a - b)
let o = 0
for (const x of I)
  if (x > o + 1) break
  else o += x
console.log(o + 1)
