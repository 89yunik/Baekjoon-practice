let [N, M, I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
I = I.replaceAll('I', 1).replaceAll('O', 0)
let [i, cnt] = [0, 0]
while (i < I.length) {
  let j = 0
  for (; i + j < I.length; j++) if (I[i + j] == j % 2) break
  if (j > 2 * N) cnt += Math.ceil(j / 2 - N)
  i += j || 1
}
console.log(cnt)
