let [A, B] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
B = B.split('')
let [stack, o] = [[B], 0]
while (stack.length) {
  const x = stack.pop()
  if (x.length == A.length) {
    if (x.join('') == A && ++o) break
    continue
  }
  if (x[0] == 'B') stack.push(x.slice(1).reverse())
  if (x[x.length - 1] == 'A') stack.push(x.slice(0, x.length - 1))
}
console.log(o)
