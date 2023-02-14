let I = `${require('fs').readFileSync('./dev/stdin')}`.trim().split`\r\n`
console.log(I[0].length < I[1].length ? 'no' : 'yes')
