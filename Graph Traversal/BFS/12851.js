let [N, K] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number)
class Node {
  constructor(e) {
    this.value = e
    this.next = null
  }
}
class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  push(e) {
    const node = new Node(e)
    this.tail ? (this.tail.next = node) : (this.head = node)
    this.tail = node
    this.size++
  }
  pop() {
    let x = null
    if (this.head) {
      x = this.head.value
      this.head = this.head.next
      if (!this.head) this.tail = null
      this.size--
    }
    return x
  }
}
let [dp, Q] = [Array(100001).fill(Infinity), new Queue()]
Q.push([N, 0])
while (Q.size) {
  const [c, t] = Q.pop()
  if (dp[c] < t) continue
  dp[c] = t
  if (c == K) break
  const next = [2 * c, c - 1, c + 1]
  for (const n of next)
    if (n < 100001 && n >= 0 && dp[n] >= t + 1) Q.push([n, t + 1])
}
let o = 1
while (Q.size) {
  const [c, t] = Q.pop()
  if (t != dp[K]) break
  if (c == K) o++
}
console.log(dp[K] + '\n' + o)
// while (Q.length) {
//   const c = Q.shift()
//   if (!cnt--) {
//     cnt = Q.length
//     o++
//   }
//   if (c == K) break
//   if (dp[c] < o) continue
//   dp[c] = o
//   const next = [2 * c, c - 1, c + 1]
//   for (const n of next) if (n < 100001 && n >= 0) Q.push(n)
// }
// Q.slice(0, cnt).reduce((a, b) => (b == K ? a + 1 : a), 1
// let [Q, cnt, o] = [[N], 1, 0]
// while (Q.length) {
//   const c = Q.shift()
//   if (!cnt--) {
//     cnt = Q.length
//     o++
//   }
//   if (c == K) break
//   const next = [2 * c, c - 1, c + 1]
//   for (const n of next) if (n < 100001 && n >= 0) Q.push(n)
// }
// console.log(
//   o + '\n' + Q.slice(0, cnt).reduce((a, b) => (b == K ? a + 1 : a), 1),
// )
