let [[a1, a0], [c], [n0]] = `${require('fs').readFileSync(
  './dev/stdin',
)}`.trim().split`\r\n`.map(e => e.split` `.map(Number))
// a1*n+a0<=c*
