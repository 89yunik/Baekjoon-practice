let S = require('fs').readFileSync('./dev/stdin').toString()
// .trim()
// .split('\r\n')
// .map(e => e.split(' ').map(Number))
let A = S.split('').reduce((a, b) => {
  a[b.charCodeAt() - 65]++
  return a
}, Array(26).fill(0))
function F() {
  let [o, mid] = ['', '']
  for (let i = 0; i < 26; i++) {
    const c = String.fromCharCode(i + 65)
    if (A[i] % 2)
      if (mid) return `I'm Sorry Hansoo`
      else mid = c
    o += c.repeat(A[i] / 2)
  }
  o += mid + o.split('').reverse().join('')
  return o
}
console.log(F())
