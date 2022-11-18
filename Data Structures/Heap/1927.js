const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

class minHeap {
  constructor() {
    this.nodes = []
  }
  insert(data) {
    this.nodes.push(data)
    let child = this.nodes.length - 1
    let parent = Math.floor((child - 1) / 2)
    while (this.nodes[child] < this.nodes[parent] && child > 0) {
      const temp = this.nodes[parent]
      this.nodes[parent] = this.nodes[child]
      this.nodes[child] = temp
      child = parent
      parent = Math.floor((child - 1) / 2)
    }
  }
  delete() {
    const end = this.nodes.pop()
    if (!this.nodes.length) {
      return end ? end : 0
    }
    const min = this.nodes.splice(0, 1, end)
    let parent = 0
    let child =
      this.nodes[(parent + 1) * 2 - 1] > this.nodes[(parent + 1) * 2]
        ? (parent + 1) * 2
        : (parent + 1) * 2 - 1
    while (
      (parent + 1) * 2 - 1 < this.nodes.length &&
      this.nodes[parent] > this.nodes[child]
    ) {
      const temp = this.nodes[parent]
      this.nodes[parent] = this.nodes[child]
      this.nodes[child] = temp
      parent = child
      child =
        this.nodes[(parent + 1) * 2 - 1] > this.nodes[(parent + 1) * 2]
          ? (parent + 1) * 2
          : (parent + 1) * 2 - 1
    }
    return min
  }
}

const N = input.shift()
let answer = ''
const heap = new minHeap()
for (let num of input) {
  num = Number(num)
  if (num === 0) {
    const min = heap.delete()
    answer += min + '\n'
  } else {
    heap.insert(num)
  }
}
const index = answer.lastIndexOf('\n')
console.log(answer.substring(0, index))
