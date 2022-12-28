let [[n], inorder, postorder] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
let o = ''
const idx = Array(n + 1)
inorder.forEach((e, i) => (idx[e] = i))
function dfs(c1, c2, c3, c4) {
  if (c1 > c2 || c3 > c4) return
  o += postorder[c4] + ' '
  const i = idx[postorder[c4]]
  dfs(c1, i - 1, c3, c3 + i - c1 - 1)
  dfs(i + 1, c2, c3 + i - c1, c4 - 1)
}
dfs(0, n - 1, 0, n - 1)
console.log(o)
// const stack = [[0, n - 1, 0, n - 1]]
// while (stack.length) {
//   const [c1, c2, c3, c4] = stack.pop()
//   if (c1 > c2 || c3 > c4) continue
//   o += postorder[c4] + ' '
//   const i = idx[postorder[c4]]
//   stack.push([i + 1, c2, c3 + i - c1, c4 - 1])
//   stack.push([c1, i - 1, c3, c3 + i - c1 - 1])
// }
// console.log(o)
