let [A, B] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
let [O, l] = [[], B.length]
loop: for (let i = 0; i < A.length; i++) {
  O.push(A[i])
  if (O.length < l) continue
  for (let j = 1; j <= l; j++) if (B[l - j] != O[O.length - j]) continue loop
  O.splice(O.length - l, l)
}
console.log(O.join('') || 'FRULA')
// let [O, l] = [[], B.length]
// for (let i = 0; i < A.length; i++) {
//   O.push(A[i])
//   const s = Math.max(0, O.length - l)
//   const x = O.slice(s).join('')
//   if (x == B) O.splice(s, l)
// }
// console.log(O.join('') || 'FRULA')
