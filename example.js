let [a, b] = `${require('fs').readFileSync('./dev/stdin')}`.trim().split` `.map(
  e => BigInt(`0b${e}`),
)
console.log((a + b).toString(2))
