let I = require('fs').readFileSync('./dev/stdin').toString()
// .trim()
// .split('\r\n')
// .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
let [stack, o] = [[], '']
for (const x of I)
  if (/[A-Z]/.test(x)) o += x
  else if (x === '(') stack.push(x)
  else if (x === ')') {
    while (stack[stack.length - 1] !== '(') o += stack.pop()
    stack.pop()
  } else if (/[+-]/.test(x)) {
    while (stack.length && stack[stack.length - 1] !== '(') o += stack.pop()
    stack.push(x)
  } else if (/[*/]/.test(x)) {
    while (
      stack.length &&
      (stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/')
    )
      o += stack.pop()
    stack.push(x)
  }
while (stack.length) o += stack.pop()
console.log(o)
