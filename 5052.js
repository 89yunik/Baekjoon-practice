// baekjoon 1406
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [stringL, stringR] = [input.shift().split(""), []];
const M = Number(input.shift());
//입력값 정리 (ex: stringL=['a', 'b', 'c'], stringR=[], M=9, input= ['L', 'L', 'L', 'L', 'L', 'P x', 'L', 'B', 'P y'])
//stringL에 cursor 좌측의 값, stringR에 cursor 우측의 값 저장
for (command of input) {
  switch (command[0]) {
    case "L":
      if (stringL.length) stringR.push(stringL.pop());
      break;
    //cursor 좌측 이동 ex: stringL,stringR : ['a','b'],['c'] -> ['a'],['c','b']
    case "D":
      if (stringR.length) stringL.push(stringR.pop());
      break;
    //cursor 우측 이동 ex: stringL,stringR : ['a'],['c','b'] -> ['a','b'],['c']
    case "B":
      if (stringL.length) stringL.pop();
      break;
    //cursor 좌측 값 삭제 ex: stringL,stringR : ['a','b'],['c'] -> ['a'],['c']
    case "P":
      stringL.push(command[2]);
      break;
    //cursor 좌측 값 추가 ex: stringL,stringR : [] ['c','b','a'] -> ['x'] ['c','b','a']
    default:
      break;
  } //switch 문 이용하여 input 처리
}

console.log(stringL.join("") + stringR.reverse().join(""));
