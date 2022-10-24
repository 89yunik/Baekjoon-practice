const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function complexity(S, N) {
  switch (S) {
    case 'O(N)':
      return N
    case 'O(N^2)':
      return N * N
    case 'O(N^3)':
      return N * N * N
    case 'O(2^N)':
      return Math.pow(2, N)
    case 'O(N!)':
      const nArr = Array.from({length: N + 1})
      nArr[0] = 1
      nArr[1] = 1
      for (let i = 2; i <= N; i++) nArr[i] = nArr[i - 1] * i
      return nArr[N]
  }
}

const C = Number(input[0])
const answer = []
for (let i = 1; i <= C; i++) {
  const [S, N, T, L] = input[i].split(' ')
  const c = complexity(S, +N)
  if (c * +T <= +L * Math.pow(10, 8)) answer.push('May Pass.')
  else answer.push('TLE!')
}
console.log(answer.join('\n'))
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
