// 모든 자리수를 더해서 합계 구하기

const str = '0123';
// 0 + 1 + 2 + 3
let sum = 0;
for(let i = 0; i < str.length; i++){
  console.log(str.charAt(i), typeof str.charAt(i)); // 문자열의 문자 하나씩 추출
  sum = sum + parseInt(str[i]);
}
console.log(sum);

let sum2 = 0;
for(const ch of str){
  sum2 = sum2 + parseInt(ch);
}
console.log(sum2);

// 조건을 0으로 초기화 하는 이유: 배열의 index로 재활용할떄