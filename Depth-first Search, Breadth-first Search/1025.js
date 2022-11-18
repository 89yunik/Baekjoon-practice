const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = input.shift().split(' ').map(Number)
let output = -1
function dfs(num, i, j, x, y) {
  if (Number.isInteger(Math.sqrt(+num)) && output < +num) output = +num
  const [I, J] = [i + x, j + y]
  if (I < N && I >= 0 && J < M && J >= 0 && (x || y))
    dfs(num + input[i + x][j + y], i + x, j + y, x, y)
}
for (let i = 0; i < N; i++)
  for (let j = 0; j < M; j++)
    for (let x = 1 - N; x < N; x++)
      for (let y = 1 - M; y < M; y++) dfs(input[i][j], i, j, x, y)
console.log(output)
