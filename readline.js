const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', function (l) {
  console.log(l)
}).on('close', function () {
  console.log(O[0])
  process.exit()
})
