let [, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim().split`\r\n`
console.log(I)
