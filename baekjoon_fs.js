// baekjoon 2529
const fs = require('fs')
let input = fs.readFileSync('./dev/stdin').toString().split('\r\n')

const k = Number(input.shift())
input = input[0].split(' ')
//입력값 정리 (ex: k=9, input=['>', '<', '<','<', '>', '>','>', '<', '<'])

const used = new Array(k+1).fill(false)
let answer = [0,1]
while(answer.length<k+1){
    // const [next,curr] = [answer.pop(),answer.pop()]
    // // used[curr] = true
    // if((input[answer.length] === '>' && curr>next)||(input[answer.length] === '<' && curr<next)){
    //     used[curr] = true
    //     answer.push(curr)
    //     used[next] = true
    //     answer.push(next)
    // }
}
console.log(answer)