const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function GCDtwo(a, b) {
  while (b % a !== 0) {
    ;[a, b] = [b % a, a]
  }
  return a
}

function GCD([...array]) {
  while (array.length >= 2) {
    const a = array.pop()
    const b = array.pop()
    array.push(GCDtwo(a, b))
  }
  return array[0]
}
const N = Number(input.shift())
input = input.slice(1, input.length).map(e => Math.abs(e - input[0]))
const g = GCD(input)
let answer = ''
for (let i = 2; i < g; i++) {
  if (g % i === 0) {
    answer += i + ' '
  }
}
answer += g
console.log(answer)
