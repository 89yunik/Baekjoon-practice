let I = require('fs').readFileSync('./dev/stdin').toString().split('-')
// .trim()
// .split('\r\n')
// let I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let O = []
I.forEach(e => {
  O.push(
    e
      .split('+')
      .map(Number)
      .reduce((a, b) => a + b, 0),
  )
})
console.log(O.reduce((a, b) => a - b))
