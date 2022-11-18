const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const N = +input[0]
const tree = {}
for (let i = 1; i <= N; i++) {
  const [curr, left, right] = input[i].split(' ')
  tree[curr] = {left, right}
}
function T(curr, order) {
  if (curr == '.') return ''
  switch (order) {
    case 'pre':
      return curr + T(tree[curr].left, 'pre') + T(tree[curr].right, 'pre')
    case 'in':
      return T(tree[curr].left, 'in') + curr + T(tree[curr].right, 'in')
    case 'post':
      return T(tree[curr].left, 'post') + T(tree[curr].right, 'post') + curr
  }
}
const output = [T('A', 'pre'), T('A', 'in'), T('A', 'post')]
console.log(output.join('\n'))
