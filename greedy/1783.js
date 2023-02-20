let [N, M] = `${require('fs').readFileSync('./dev/stdin')}`.trim().split` `.map(
  Number,
)
console.log(
  N == 1
    ? 1
    : N == 2
    ? Math.min(4, ~~((M + 1) / 2))
    : M < 7
    ? Math.min(4, M)
    : M - 2,
)
