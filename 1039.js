// baekjoon 1039
const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().split('\r\n')

let [N, K] = input[0].split(' ')
K = parseInt(K)
let result = -1
if (N.length !== 1 && parseInt(N.slice(1, N.length)) !== 0) {
  let nArr = N.split('').map(e => parseInt(e))
  for (let i = 0; i < nArr.length - 1; i++) {
    if (K === 0) {
      break
    }
    const max = Math.max(...nArr.slice(i + 1))
    let key = nArr[i]
    if (key < max) {
      let candidate = nArr.slice(i + 1).reduce((cnt, e) => cnt + (e === max), 0)
      let subArr = nArr.slice(i, i + candidate)
      const impossible = subArr.reduce((cnt, e) => cnt + (e === max), 0)
      candidate = Math.min(candidate, K + impossible)
      if (candidate > 1) {
        subArr = nArr.slice(i, i + candidate).sort()
        nArr = [...nArr.slice(0, i), ...subArr, ...nArr.slice(i + candidate)]
        key = nArr[i]
      }
      const j = nArr.lastIndexOf(max)
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
