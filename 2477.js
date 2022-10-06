const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const K = Number(input.shift())
input = input.map(e => e.split(' ').map(e => +e))

const [maxWidth, maxHeight] = input.reduce(
  (max, e) => {
    if ((e[0] === 1 || e[0] === 2) && e[1] > max[0]) max[0] = e[1]
    if ((e[0] === 3 || e[0] === 4) && e[1] > max[1]) max[1] = e[1]
    return max
  },
  [0, 0],
)
const big = maxWidth * maxHeight

let coordinates = [[0, 0]]
for (const move of input) {
  const curr = [...coordinates[coordinates.length - 1]]
  if (move[0] === 1) curr[0] += move[1]
  if (move[0] === 2) curr[0] -= move[1]
  if (move[0] === 3) curr[1] -= move[1]
  if (move[0] === 4) curr[1] += move[1]
  coordinates.push(curr)
}
coordinates.pop()
coordinates = coordinates.sort((a, b) => b[0] - a[0] || b[1] - a[1])

let smallWidth = 0
if (coordinates[0][1] - coordinates[1][1] === maxHeight)
  smallWidth = coordinates[2][0] - coordinates[4][0]
else smallWidth = coordinates[0][0] - coordinates[2][0]
const smallHeight = coordinates[2][1] - coordinates[3][1]
const small = smallWidth * smallHeight
const answer = (big - small) * K
console.log(answer)
