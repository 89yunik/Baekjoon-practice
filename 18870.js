const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = input.shift()

const X = [...new Set(input[0].split(' '))]
  .sort((a, b) => a - b)
  .reduce((prev, cur, i) => {
    prev[cur] = i
    return prev
  }, {})
let answer = ''
input[0].split(' ').forEach(e => (answer += X[e] + ' '))
const index = answer.lastIndexOf(' ')
console.log(answer.substring(0, index))
