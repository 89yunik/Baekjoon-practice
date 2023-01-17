//fs
const fs = require('fs')
//로컬 테스트 경로
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//제출 시 경로
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
//input[0].split(' ').map(e => +e)

const [n, m] = input[0].split(' ').map(e => +e)
const pascal = new Array(n + 1).fill().map((_, i) => new Array(i + 1).fill(1))
for (let i = 2; i < n + 1; i++) {
  for (let j = 1; j < i; j++)
    pascal[i][j] = (
      BigInt(pascal[i - 1][j - 1]) + BigInt(pascal[i - 1][j])
    ).toString()
}
console.log(pascal[n][m])
// rl
// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// let input = []

// rl.on('line', function (line) {
//   input.push(line)
// }).on('close', function () {
//   process.exit()
// })
