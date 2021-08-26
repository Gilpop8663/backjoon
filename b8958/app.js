const fs = require("fs");

const filePath = process.platform === "linux" ? "./input.txt" : "/dev/stdin"; //제 개발환경은 리눅스이기에 input.txt를 앞에 두었습니다.

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'; // 실제 백준사이트에 제출할 때는 위에 filePath를 삭제하고 이 부분을 입력하면 됩니다.

let input = fs.readFileSync(filePath).toString().split("\n");

//console.log(input);

let testCount = +input[0];

solution(input);

function solution(A) {
  let count = 0;
  let sum = 0;
  let answer = [];
  for (let i = 1; i <= testCount; i++) {
    //console.log(A[i].length);
    for (let k in A[i]) {
      //console.log(k);
      //console.log(A[i].length - 1);
      //console.log(A[i][k]);
      if (A[i][k] === "O") {
        count = count + 1;
        //console.log(count);
        sum = sum + count;
      } else if (A[i][k] === "X") {
        count = 0;
      }
      if (Number(k) === A[i].length - 1) {
        answer.push(sum);
        sum = 0;
        count = 0;
      }
    }
  }
  for (let m = 0; m < answer.length; m++) {
    console.log(answer[m]);
  }
}

/*
function solution(A) {
    let count = 0;
    let sum = 0;
    let answer = [];
    for (let i = 1; i <= testCount; i++) {
      //console.log(A[i].length);
      for (let k in A[i]) {
        //console.log(k);
        if (Number(k) === A[i].length - 1) {
          answer.push(sum);
          sum = 0;
          count = 0;
        }
        if (A[i][k] === "O") {
          count = count + 1;
          sum = sum + count;
        } else if (A[i][k] === "X") {
          count = 0;
        }
      }
    }
    for (let m = 0; m < answer.length; m++) {
      console.log(answer[m]);
    }
  }
  */
