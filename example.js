let I = `${require('fs').readFileSync('./dev/stdin')}`.trim().split`\r\n`.map(
  e => e.split` `,
)
console.log(
  I.reduce(
    (a, [, b, c]) => [
      a[0] + (c == 'P' ? 0 : +b),
      a[1] +
        b *
          (c == 'A+'
            ? 4.5
            : c == 'A0'
            ? 4.0
            : c == 'B+'
            ? 3.5
            : c == 'B0'
            ? 3.0
            : c == 'C+'
            ? 2.5
            : c == 'C0'
            ? 2.0
            : c == 'D+'
            ? 1.5
            : c == 'D0'
            ? 1.0
            : 0.0),
    ],
    [0, 0],
  ).reduce((a, b) => b / a),
)
