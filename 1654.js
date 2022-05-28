// baekjoon 1654
let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [k, n] = input
  .shift()
  .split(" ")
  .map((e) => Number(e));
const kArr = input.map((e) => Number(e)); //parseInt()를 사용하면 채점이 정상적으로 되지 않음
//입력값 정리 (ex: k=4,n=11, kArr=[802,743,457,539])

let [min, max] = [1, Math.max(...kArr)];
// [1, 길이의 최댓값]을 [최솟값, 최댓값]으로 가정함 ex: [min, max] = [1, 802]
while (min < max) {
  let mid = Math.ceil((min + max) / 2); //최댓값을 찾기 위해 Math.ceil() 사용
  let m = kArr
    .map((e) => Math.floor(e / mid))
    .reduce((prev, curr) => prev + curr, 0);
  // 최댓값과 최솟값의 중간값 mid 초기화, 길이가 mid일 때 만들 수 있는 랜선의 개수 m 계산
  n > m ? (max = mid - 1) : (min = mid);
  // m이 n보다 작다면 길이를 줄여야 하므로 최댓값을 mid-1로 변경/최대 길이를 찾아야 하므로 m이 n과 같거나 크면 최솟값을 mid로 변경
} //이분탐색으로 최대 랜선의 길이를 찾음 ex: [min, max] = [1, 401],[1, 200],[101,200]...,[197,200],[199,200],[200,200]
console.log(max);
