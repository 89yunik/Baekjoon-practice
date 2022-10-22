const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function operate(a, operator, b) {
  switch (operator) {
    case 0:
      return a + b
    case 1:
      return a - b
    case 2:
      return a * b
    case 3:
      return parseInt(a / b)
  }
}

const N = Number(input[0])
const A = input[1].split(' ').map(e => +e)
const operatorNum = input[2].split(' ').map(e => +e)
const answer = [-Infinity, Infinity]
const stack = []
stack.push([0, 0, 0, operatorNum])
operatorNum[0]++
while (stack.length) {
  const [a, operator, bIndex, [...rest]] = stack.pop()
  rest[operator]--
  const b = A[bIndex]
  const c = operate(a, operator, b)
  if (bIndex === N - 1) {
    if (c > answer[0]) answer[0] = c
    if (c < answer[1]) answer[1] = c
  }
  for (let i = 0; i <= 3; i++) {
    if (rest[i]) stack.push([c, i, bIndex + 1, rest])
  }
}
console.log(answer.join('\n'))
// let operators = ''
// operatorNum.forEach((e, index) => {
//   let operator = ''
//   switch (index) {
//     case 0:
//       operator = '+'
//       break
//     case 1:
//       operator = '-'
//       break
//     case 2:
//       operator = '*'
//       break
//     case 3:
//       operator = '/'
//       break
//   }
//   for (let i = 0; i < e; i++) operators += operator
// })
// const ordered = new Set()
// for (let i = 0; i < N - 1; i++) {
//   const stack = []
//   const visitedI = Array.from({length: N - 1}, _ => false)
//   stack.push([operators[i], visitedI, i])
//   while (stack.length) {
//     const [curr, [...visited], i] = stack.pop()
//     visited[i] = true
//     if (curr.length === N - 1) {
//       ordered.add(curr)
//       continue
//     }
//     for (let j = 0; j < N - 1; j++) {
//       if (!visited[j]) stack.push([curr + operators[j], visited, j])
//     }
//   }
// }

// const answer = [...ordered].reduce(
//   (prev, curr) => {
//     curr = '+' + curr
//     const num = A.reduce((a, b, i) => operate(a, curr[i], b), 0)
//     if (num > prev[0]) prev[0] = num
//     if (num < prev[1]) prev[1] = num
//     return prev
//   },
//   [-Infinity, Infinity],
// )
// console.log(answer.join('\n'))
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
