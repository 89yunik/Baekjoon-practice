const [, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
function gcd(a, b) {
  if (!(a % b)) return b
  return gcd(b, a % b)
}
for (let [a, b] of I) {
  if (a < b) [a, b] = [b, a]
  console.log((a * b) / gcd(a, b))
}
