let N = +`${require('fs').readFileSync('./dev/stdin')}`
// .split`\n`.map(e => e.split` `.map(Number))
const F = n => (n > 1 ? n * F(n - 1) : 1)
console.log(F(N))
