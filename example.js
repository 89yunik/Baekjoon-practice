let [[x, y, r], [x2, y2, r2]] = `${require('fs').readFileSync(
  './dev/stdin',
)}`.trim().split`\n`.map(e => e.split` `.map(Number))
l
