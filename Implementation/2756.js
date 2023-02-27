let [, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
console.log(
  I.map(e => {
    function score(x, y) {
      const r = x ** 2 + y ** 2
      return r > 225
        ? 0
        : r > 144
        ? 20
        : r > 81
        ? 40
        : r > 36
        ? 60
        : r > 9
        ? 80
        : 100
    }
    let [a, b] = [0, 0]
    for (let i = 0; i < 3; i++) a += score(e[2 * i], e[2 * i + 1])
    for (let i = 3; i < 6; i++) b += score(e[2 * i], e[2 * i + 1])
    return `SCORE: ${a} to ${b}, ${
      a > b ? `PLAYER 1 WINS.` : a < b ? `PLAYER 2 WINS.` : `TIE.`
    }`
  }).join`\n`,
)
