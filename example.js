const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const T = input.shift()
for (let i = 0; i < T; i++) {
  const PS = input[i].split('')
  const stack = []
  let isVPS = true
  for (str of PS) {
    if (str === '(') {
      stack.push(str)
    } else {
      if (stack[stack.length - 1] === '(') {
        stack.pop()
      } else {
        isVPS = false
        break
      }
    }
  }
  if (stack.length) {
    isVPS = false
  }
  isVPS ? console.log('YES') : console.log('NO')
}
