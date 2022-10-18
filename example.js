//fs
const fs = require('fs')
//로컬 테스트 경로
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//제출 시 경로
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
//input[0].split(' ').map(e => +e)
const [A, B] = input[0].split(' ').map(e => +e)
const queue = []
let [curr, num, answer] = [0, 1, -1]
queue.push([A, num])
while (queue.length) {
  curr = queue.shift()
  if (curr[0] === B) {
    answer = curr[1]
    break
  }
  const next = [curr[0] * 2, Number(curr[0].toString() + '1')]
  if (next[0] <= B) queue.push([next[0], curr[1] + 1])
  if (next[1] <= B) queue.push([next[1], curr[1] + 1])
}
console.log(answer)
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
