let [N, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\r\n`
let O = [0, 0]
I.forEach(x => (O[0] += x.split`X`.filter(y => y.length > 1).length))
for (let j = 0; j < N; j++) {
  let x = ''
  for (let i = 0; i < N; i++) x += I[i][j]
  O[1] += x.split`X`.filter(y => y.length > 1).length
}
console.log(O.join` `)
