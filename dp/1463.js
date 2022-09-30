const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const num = Number(input[0])
const array = new Array(num + 1)
array[0] = 0
array[1] = 0
array[2] = 1
array[3] = 1
for (let i = 4; i <= num; i++) {
  const candidate = [array[i - 1]]
  if (i % 3 === 0) {
    candidate.push(array[i / 3])
  }
  if (i % 2 === 0) {
    candidate.push(array[i / 2])
  }
  array[i] = Math.min(...candidate) + 1
}
let answer = array[num]
console.log(answer)
