let [, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(Number)
function F(x) {
  if (x < 2) x = 2
  l: while (true) {
    for (let i = 2; i <= x ** (1 / 2); i++) if (!(x % i) && ++x) continue l
    return x
  }
}
console.log(I.map(e => F(e)).join`\n`)
