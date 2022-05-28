// baekjoon 2606
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const nodeNum = Number(input.shift());
const lineNum = Number(input.shift());
input = input.reduce(
  (prev, curr) => {
    const [node1, node2] = curr.split(" ").map((e) => Number(e));
    prev[node1].push(node2);
    prev[node2].push(node1);
    return prev;
  },
  new Array(nodeNum + 1).fill().map((e) => new Array(0))
);
//입력값 정리 ex: nodeNum=7, lineNum=6, input=[[], [ 2, 5 ], [ 1, 3, 5 ], [ 2 ],[ 7 ], [ 1, 2, 6 ], [ 5 ], [ 4 ]]
const stack = [1];
const visited = new Array(nodeNum + 1).fill(false);
//stack, visited 초기화 array index는 0부터 시작하고 node 번호는 1부터 시작하므로 nodeNum+1
while (stack.length) {
  const currentNode = stack.pop(); //ex:currentNode=1->5->...
  visited[currentNode] = true;
  const nextNodes = input[currentNode];
  nextNodes.forEach((nextNode) => {
    if (!visited[nextNode]) stack.push(nextNode);
  });
} //dfs
const answer = visited.filter((e) => e === true).length - 1; //방문한 node의 수=visited[i]=true의 수, 시작점은 제외해야 하므로 1을 빼줌
console.log(answer);
