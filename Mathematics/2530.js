let [[A, B, C], [D]] = `${require('fs').readFileSync('./dev/stdin')}`
  .split`\n`.map(e => e.split` `.map(Number))
const O = [3600, 60, 1]
let x = (A * 60 * 60 + B * 60 + C + D) % 86400
console.log(
  O.map(y => {
    z = ~~(x / y)
    x %= y
    return z
  }).join` `,
)
