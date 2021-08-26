const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

// console.log(input);

// console.log(input);

let testCount = +input[0];

solution(input);

function solution(A) {
  let sum = 0;
  let average = 0;
  let count = 0;
  let howMany = 0;
  let answer = 0;
  for (let i = 1; i <= testCount; i++) {
    sum = 0;
    average = 0;
    count = 0;
    A[i] = A[i].split(" ").map((item) => +item);
    let student = A[i][0];
    for (let j = 1; j <= student; j++) {
      sum = sum + A[i][j];
    }
    average = sum / student;
    for (let k = 1; k <= student; k++) {
      if (A[i][k] > average) {
        count = count + 1;
      }
      howMany = (count / student) * 100;
    }
    let u = 1000;
    answer = (Math.round(howMany * u) / u).toFixed(3);
    console.log(`${answer}%`);
  }
}
