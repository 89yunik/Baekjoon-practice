// const [[x1, y1, x2, y2], [x3, y3, x4, y4]] = require('fs').readFileSync(0).toString().split('\n').map(e => e.split(' ').map(Number))
// if ((x3 == x2 || x4 == x1) && (y3 == y2 || y4 == y1)) console.log('POINT')
// else if (((x3 == x2 || x4 == x1) && y4 > y1 && y3 < y2) || ((y3 == y2 || y4 == y1) && x4 > x1 && x3 < x2)) console.log('LINE')
// else if (x3 > x2 || y3 > y2 || x4 < x1 || y4 < y1) console.log('NULL')
// else console.log('FACE')
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})
let I = []
rl.on('line', function (line) {
  I.push(line)
}).on('close', function () {
  function state(x1, y1, x2, y2, x3, y3, x4, y4) {
    if ((x3 === x2 || x4 === x1) && (y3 === y2 || y4 === y1)) return 'POINT'
    if (
      ((x3 === x2 || x4 === x1) && y4 > y1 && y3 < y2) ||
      ((y3 === y2 || y4 === y1) && x4 > x1 && x3 < x2)
    )
      return 'LINE'
    if (x3 > x2 || y3 > y2 || x4 < x1 || y4 < y1) return 'NULL'
    return 'FACE'
  }
  const [x1, y1, x2, y2] = I[0].split(' ').map(Number)
  const [x3, y3, x4, y4] = I[1].split(' ').map(Number)
  console.log(state(x1, y1, x2, y2, x3, y3, x4, y4))
  process.exit()
})
