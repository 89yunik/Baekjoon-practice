let I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(Number)
I.pop()
const max = 1000000
const [O, A, S] = [[], Array(max + 1).fill(1), new Set()]
for (let i = 2; i <= max; i++)
  if (A[i] && S.add(i)) for (let j = i + i; j <= max; j += i) A[j] = 0
for (const e of I)
  for (x of S) if (S.has(e - x) && O.push(`${e} = ${x} + ${e - x}`)) break
console.log(O.join('\n'))
