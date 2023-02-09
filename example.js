const [D, H, W] = `${require('fs').readFileSync('./dev/stdin')}`.trim()
  .split` `.map(Number)
const d = (H ** 2 + W ** 2) ** 0.5
console.log(~~((D * H) / d), ~~((D * W) / d))
