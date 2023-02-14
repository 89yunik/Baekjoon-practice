let S = `${require('fs').readFileSync('./dev/stdin')}`
S = S.replace(/[0-9]/g, x => (+x).toString(2).padStart(3, 0))
console.log(S.indexOf('1') != -1 ? S.slice(S.indexOf('1')) : 0)
