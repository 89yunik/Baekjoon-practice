let I = require('fs').readFileSync('./dev/stdin').toString().trim().split('')
function F() {
  let [S, o] = [[], 0]
  for (c of I)
    if (c == '(' || c == '[') S.push(c)
    else {
      let x = 0
      while (typeof S[S.length - 1] === 'number') x += S.pop()
      if (x === 0) x = 1
      if (S.length) {
        let p = S.pop()
        if (p == '(' && c == ')') S.push(x * 2)
        else if (p == '[' && c == ']') S.push(x * 3)
        else return 0
      } else return 0
    }
  for (let x of S)
    if (typeof x === 'number') o += x
    else return 0
  return o
}
console.log(F())
