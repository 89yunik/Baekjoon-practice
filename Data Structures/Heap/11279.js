const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

class maxHeap {
  constructor() {
    this.nodes = []
  }
  insert(data) {
    this.nodes.push(data)
    let child = this.nodes.length - 1
    let parent = Math.floor((child - 1) / 2)
    while (this.nodes[child] > this.nodes[parent] && child > 0) {
      const temp = this.nodes[parent]
      this.nodes[parent] = this.nodes[child]
      this.nodes[child] = temp
      child = parent
      parent = Math.floor((child - 1) / 2)
    }
  }
  delete() {
    const min = this.nodes.pop()
    if (!this.nodes.length) {
      return min ? min : 0
    }
    const max = this.nodes.splice(0, 1, min)
    let parent = 0
    let child =
      this.nodes[(parent + 1) * 2 - 1] < this.nodes[(parent + 1) * 2]
        ? (parent + 1) * 2
        : (parent + 1) * 2 - 1
    while (
      (parent + 1) * 2 - 1 < this.nodes.length &&
      this.nodes[parent] < this.nodes[child]
    ) {
      const temp = this.nodes[parent]
      this.nodes[parent] = this.nodes[child]
      this.nodes[child] = temp
      parent = child
      child =
        this.nodes[(parent + 1) * 2 - 1] < this.nodes[(parent + 1) * 2]
          ? (parent + 1) * 2
          : (parent + 1) * 2 - 1
    }
    return max
  }
}

const N = input.shift()
let answer = ''
const heap = new maxHeap()
for (let num of input) {
  num = Number(num)
  if (num === 0) {
    const max = heap.delete()
    answer += max + '\n'
  } else {
    heap.insert(num)
  }
}
const index = answer.lastIndexOf('\n')
console.log(answer.substring(0, index))
