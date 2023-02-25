let [, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number).sort((a, b) => a - b))
console.log(I.map(([a, b, c]) => (a + b) ** 2 + c ** 2).join`\n`)
