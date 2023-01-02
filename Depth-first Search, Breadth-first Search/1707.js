let [[], ...I] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// let [[], ...I] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' ').map(Number))
let [i, O] = [0, []]
while (i < I.length) {
  let [[V, E], j, o] = [I[i++], i, 'YES']
  const G = [...Array(V + 1)].map(_ => [])
  for (; j < i + E; j++) {
    const [a, b] = I[j]
    G[a].push(b)
    G[b].push(a)
  }
  const [A, B, visited] = [new Set(), new Set(), Array(V + 1).fill(0)]
  function dfs(s) {
    const stack = [s]
    visited[s[0]]++
    while (stack.length) {
      const [x, n] = stack.pop()
      n ? A.add(x) : B.add(x)
      for (nx of G[x])
        if ((n && A.has(nx)) || (!n && B.has(nx))) {
          o = 'NO'
          break
        } else if (!visited[nx]) {
          visited[nx]++
          stack.push([nx, +!n])
        }
    }
  }
  for (let k = 0; k <= V; k++) if (!visited[k]) dfs([k, 0])
  // function bfs(s) {
  //   const queue = [s]
  //   visited[s]++
  //   let [n, cnt] = [1, 1]
  //   while (queue.length) {
  //     const x = queue.shift()
  //     if (!cnt--) {
  //       cnt = queue.length
  //       n = +!n
  //     }
  //     n ? A.add(x) : B.add(x)
  //     for (nx of G[x])
  //       if ((n && A.has(nx)) || (!n && B.has(nx))) {
  //         o = 'NO'
  //         break
  //       } else if (!visited[nx]) {
  //         visited[nx]++
  //         queue.push(nx)
  //       }
  //   }
  // }
  // for (let k = 0; k <= V; k++) if (!visited[k]) bfs(k)
  i = j
  O.push(o)
}
console.log(O.join('\n'))
