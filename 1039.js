// baekjoon 1039
const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().split('\r\n')

let [N, K] = input[0].split(' ')
K = parseInt(K)
let result = -1
if (N.length !== 1 && (N.length !== 2 || N[N.length - 1] != 0)) {
  const nArr = N.split('').map(e => parseInt(e))
  for (let i = 0; i < nArr.length - 1; i++) {
    if (K === 0) {
      break
    }
    const key = nArr[i]
    const max = Math.max(...nArr.slice(i + 1))
    if (key < max) {
      const j = nArr.lastIndexOf(max) //error
      nArr[i] = max
      nArr[j] = key
      K--
    }
  }
  if (K && K % 2 !== 0) {
    const last1 = nArr.pop()
    const last2 = nArr.pop()
    nArr.push(last1)
    nArr.push(last2)
  }
  result = parseInt(nArr.join(''))
}
console.log(result)
