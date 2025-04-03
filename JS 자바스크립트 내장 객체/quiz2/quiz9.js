// Q15
console.log(Math.round(7.5));

//Q16
console.log(Math.floor(5.9));

// Q17
console.log(Math.sign(42));

// Q18
console.log(Math.min(10,20,30,40,50));

// Q19
console.log(Math.max(3,6,9,12,15));

// Q20
// 숫자 1 ~ 6
// min 1 max 6 
// let num = Math.random();
// console.log(num);
// console.log(Math.floor(num*6)+1);


// Q20

// 주사위 굴리기: 1~6 사이의 숫자 중 무작위로 하나 생성
const num = Math.random();
console.log(num);
console.log(num*10);
// 범위: 0~9
console.log(Math.floor(num*10));
// 범위: 1~6
console.log(Math.floor(num*6)+1);

// random() 함수의 최대값: 0.999
// 0.9 * 6 => 5.4

// 주사위 3번 굴리기

const func = function() {
  const num = Math.random();
  console.log(Math.floor(num*6)+1);
}
func();
func();
func();