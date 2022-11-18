const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = +input[0]
const num = Array.from({length: 10}, (_, i) => i.toString())
for (const e of num)
  for (let i = 0; i < +e % 10; i++) num.push(e + i.toString())
const output = num.length > N - 1 ? num[N - 1] : -1
console.log(output)
