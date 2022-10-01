const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
//1456
let [A, B] = input
  .shift()
  .split(' ')
  .map(e => Number(e))
// const max = Math.floor(Math.sqrt(B))
// const pNum = new Array(max + 1).fill(true)
// pNum[0] = false
// pNum[1] = false
// for (let i = 2; i < max + 1; i++) {
//   for (let j = 2; i * j < max + 1; j++) {
//     pNum[i * j] = false
//   }
//   i = pNum.slice()
// }
// const answers = new Set()
// for (let i = 2; i <= max; i++) {
//   for (let j = 2; Math.pow(i, j) <= B; j++) {
//     answers.add(Math.pow(i, j))
//   }
// }

// console.log([...answers], answers.size)
