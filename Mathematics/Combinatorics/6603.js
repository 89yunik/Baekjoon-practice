let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
I.pop()
function C(A, r) {
  if (r == 1) return A.map(e => [e])
  let R = []
  for (let i = 0; i < A.length; i++)
    R.push(...C(A.slice(i + 1), r - 1).map(e => [A[i], ...e]))
  return R
}
const O = []
I.forEach(([, ...A]) =>
  O.push(
    C(A, 6)
      .map(e => e.join(' '))
      .join('\n'),
  ),
)
console.log(O.join('\n\n'))
