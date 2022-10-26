const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function dfs(curr, i) {
  if (curr.length === K) {
    let num = 0
    words.forEach(word => word.split('').every(e => curr.includes(e)) && num++)
    answer = Math.max(answer, num)
    return
  }
  for (let j = i + 1; j < alphabets.length; j++) dfs(curr + alphabets[j], j)
}

let [N, K] = input[0].split(' ').map(e => +e)
let answer = 0
const words = []
let alphabets = new Set()
for (let i = 1; i <= N; i++) {
  let converted = new Set()
  for (let j = 4; j < input[i].length - 4; j++) {
    const regex = /[^acint]/
    if (regex.test(input[i][j]))
      converted.add(input[i][j]) && alphabets.add(input[i][j])
  }
  words.push([...converted].join(''))
}
alphabets = [...alphabets]
K -= 5
if (K >= alphabets.length) answer = N
else if (K === 0) words.forEach(word => !word.length && answer++)
else if (K > 0) for (let i = 0; i < alphabets.length; i++) dfs(alphabets[i], i)
console.log(answer)
