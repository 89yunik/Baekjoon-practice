let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(Number)
// let [[], ...I] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let O = []
function F(s, e) {
  if (s >= e) return
  let mid = e
  for (let i = s; i < e; i++) if (I[i] > I[s] && (mid = i)) break
  O.push(I[s])
  F(mid, e)
  F(s + 1, mid)
}
F(0, I.length)
// const stack = [[0, I.length]]
// while (stack.length) {
//   const [s, e] = stack.pop()
//   if (s >= e) continue
//   let mid = e
//   for (let i = s; i < e; i++) if (I[i] > I[s] && (mid = i)) break
//   O.push(I[s])
//   stack.push([s + 1, mid], [mid, e])
// }
console.log(O.reverse().join('\n'))
