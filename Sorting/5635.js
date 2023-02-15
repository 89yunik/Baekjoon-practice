let [, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\r\n`.map(e => e.split` `)
I.sort((a, b) => b[3] - a[3] || b[2] - a[2] || b[1] - a[1])
console.log(I[0][0], I[I.length - 1][0])
