let S = `${require('fs').readFileSync('./dev/stdin')}`.trim()
// console.log(
//   S.replace(/[^<>]+/g, (x, i) =>
//     S[i - 1] == '<'
//       ? x
//       : x.split` `.map(e => e.split``.reverse().join``).join` `,
//   ),
// )
// console.log(
//   S.replace(/<.*?>|[^ <>]+/g, x =>
//     x[0] != '<' ? x.split('').reverse().join('') : x,
//   ),
// )
let [o, A] = ['', []]
for (const x of S) {
  A.push(x)
  if (A[0] == '<') {
    if (x == '>' && (o += A.join``)) A = []
  } else if (x == ' ' || x == '<') {
    A.pop()
    o += A.reverse().join``
    A = ['<']
    if (x == ' ' && A.pop()) o += x
  }
}
o += A.reverse().join``
console.log(o)
