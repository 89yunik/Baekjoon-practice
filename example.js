let [, ...I] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split`\n`.map(Number)
function F(A) {
  let [max, cnt] = [A[0], 1]
  A.forEach(e => e > max && (max = e) && ++cnt)
  return cnt
}
console.log(F(I), F(I.reverse()))
