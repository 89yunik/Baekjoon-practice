const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [X, K] = input[0].split(' ').map(e => BigInt(e).toString(2))
let [Y, j] = ['', K.length - 1]
for (let i = X.length - 1; i >= 0; i--)
  if (X[i] == '1') Y = '0' + Y
  else Y = j >= 0 ? K[j--] + Y : '0' + Y
while (j >= 0) Y = K[j--] + Y
Y = BigInt('0b' + Y)
console.log(Y.toString())
