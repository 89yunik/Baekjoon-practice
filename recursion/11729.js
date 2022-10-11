const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function hanoi(n, move) {
  const [start, end] = move
  if (n === 1) return [`${start} ${end}`]
  let rest = 0
  if (move.includes(2) && move.includes(3)) rest = 1
  else if (move.includes(1) && move.includes(3)) rest = 2
  else rest = 3
  const first = hanoi(n - 1, [start, rest])
  const second = `${start} ${end}`
  const third = hanoi(n - 1, [rest, end])
  return [...first, second, ...third]
}

const N = Number(input[0])
const answer = hanoi(N, [1, 3])
console.log(answer.length + '\n' + answer.join('\n'))
