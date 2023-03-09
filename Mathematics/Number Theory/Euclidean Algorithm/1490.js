const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
function gcd(a, b) {
  while (b % a != 0) [a, b] = [b % a, a]
  return a
}
const lcm = (a, b) => (a * b) / gcd(a, b)
const lcmA = arr => arr.reduce((p, c) => lcm(p, c), 1)
const modR = (a, b) => (a % b ? b - (a % b) : 0)
let N = input[0]
const nArr = N.split('').filter(e => e != '0')
N = +N
const num = lcmA(nArr)
for (let i = 1; modR(N, num) >= i; i *= 10) N *= 10
N += modR(N, num)
console.log(N)
