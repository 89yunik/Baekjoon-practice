let [, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(e => e.split` `.map(Number))
let [i, O] = [0, []]
while (i < I.length) {
  const [N] = I[i]
  const A = I.slice(i + 1, i + N + 1).sort((a, b) => a[0] - b[0])
  let [o, min] = [0, Infinity]
  A.forEach(([, b]) => b < min && ++o && (min = b))
  O.push(o)
  i += N + 1
}
console.log(O.join`\n`)
