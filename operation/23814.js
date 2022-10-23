const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const D = BigInt(input[0])
const menu = input[1].split(' ').map(e => BigInt(e))
const max = BigInt((menu[0] + menu[1] + menu[2]) / D)
let num = menu.reduce((prev, curr) => prev + curr / D, BigInt(0))
while (max > num) {
  const [n, m] = [D - (menu[0] % D), D - (menu[1] % D)]
  if (n <= m) {
    if (n > menu[2]) break
    menu[2] -= n
    menu[0] += n
  } else {
    if (m > menu[2]) break
    menu[2] -= m
    menu[1] += m
  }
  num = menu.reduce((prev, curr) => prev + curr / D, BigInt(0))
}
console.log(menu[2].toString())

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
