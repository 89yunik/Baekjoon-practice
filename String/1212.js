console.log(
  BigInt(`0o${require('fs').readFileSync('./dev/stdin')}`).toString(2),
)
