let [N, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(Number)
gcd = (a, b) => (b ? gcd(b, a % b) : a)
let dist = 0
for (let i in I) dist = gcd(I[+i + 1] - I[i], dist)
console.log((I[N - 1] - I[0]) / dist + 1 - N)
