const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function swap(a, b) {
  ;[A[a], A[b]] = [A[b], A[a]]
  S--
}

function maxIndex(arr) {
  return arr.reduce((i, _, j) => (arr[i] < arr[j] ? j : i), 0)
}

const N = +input[0]
const A = input[1].split(' ').map(e => +e)
let [S, i] = [+input[2], 0]
while (S > 0 && i < N) {
  const maxI = i + maxIndex(A.slice(i, i + 1 + S))
  for (let j = maxI; j > i; j--) swap(j - 1, j)
  i++
}
console.log(A.join(' '))
