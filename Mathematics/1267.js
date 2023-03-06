let [, I] = `${require('fs').readFileSync('./dev/stdin')}`.trim().split`\n`.map(
  e => e.split` `.map(Number),
)
const [x, y] = [
  I.reduce((a, b) => a + (~~(b / 30) + 1) * 10, 0),
  I.reduce((a, b) => a + (~~(b / 60) + 1) * 15, 0),
]
console.log(`${x < y ? 'Y' : x > y ? 'M' : 'Y M'} ${x < y ? x : y}`)
