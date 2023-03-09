let [a, b] = `${require('fs').readFileSync('./dev/stdin')}`.trim().split` `
  .map(Number)
  .sort((a, b) => b - a)
const gcd = (a, b) => (a % b ? gcd(b, a % b) : b)
console.log((a * b) / gcd(a, b))
