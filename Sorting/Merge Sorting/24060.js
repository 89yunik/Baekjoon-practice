const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function mergeSort(A, p, r) {
  if (p < r) {
    const q = Math.floor((p + r) / 2)
    mergeSort(A, p, q)
    mergeSort(A, q + 1, r)
    merge(A, p, q, r)
  }
}

function merge(A, p, q, r) {
  let tmp = []
  let [i, j] = [p, q + 1]
  while (i <= q && j <= r) {
    if (A[i] <= A[j]) tmp.push(A[i++])
    else tmp.push(A[j++])
  }
  while (i <= q) tmp.push(A[i++])
  while (j <= r) tmp.push(A[j++])
  i = p
  let t = 0
  while (i <= r) {
    if (++cnt === +K) {
      console.log(tmp[t])
      break
    }
    A[i++] = tmp[t++]
  }
  tmp = undefined
}

const [N, K] = input[0].split(' ')
let cnt = 0
const arr = input[1].split(' ').map(e => +e)

mergeSort(arr, 0, arr.length - 1)
if (cnt < +K) console.log(-1)
