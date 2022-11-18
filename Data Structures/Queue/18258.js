const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
//let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const N = input.shift()

class Node {
  constructor(e) {
    this.element = e
    this.next = null
  }
}
class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(e) {
    const node = new Node(e)
    if (!this.length) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }
  pop() {
    let result = -1
    if (this.head) {
      result = this.head.element
      this.head = this.head.next
      if (!this.head) this.tail = null
      this.length--
    }
    return result
  }
  size() {
    return this.length
  }
}
const queue = new Queue()
let answer = ''
input.forEach(e => {
  const [command, num] = e.split(' ')
  switch (command) {
    case 'push':
      queue.push(num)
      break
    case 'pop':
      const pop = queue.pop()
      answer += pop
      answer += '\n'
      break
    case 'size':
      answer += queue.size()
      answer += '\n'
      break
    case 'empty':
      answer += queue.size() ? 0 : 1
      answer += '\n'
      break
    case 'front':
      answer += queue.head ? queue.head.element : -1
      answer += '\n'
      break
    case 'back':
      answer += queue.tail ? queue.tail.element : -1
      answer += '\n'
      break
  }
})
const index = answer.lastIndexOf('\n')
console.log(answer.substring(0, index))
