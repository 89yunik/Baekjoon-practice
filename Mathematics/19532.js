let [a, b, c, d, e, f] = `${require('fs').readFileSync('./dev/stdin')}`
  .trim()
  .split(' ')
  .map(Number)
const g = b * d - a * e
console.log((b * f - c * e) / g, (c * d - a * f) / g)
