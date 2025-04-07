const arr = [1,2,3];


const [a,b,c] = arr;

console.log(a, b, c);

const arr2 = ['a', 'b', 'c', 'd', 'e'];

// 첫번쨰 요소는 ch1, 두번쨰 요소는 ch2
// 나머지는 args 배열에 수집
// const [ch1, ch2, ...args] = arr2;

// console.log(ch1,ch2,args);

// 특정 요소는 건너띄고 저장하기
// 세번째 자리를 비어두고 네번째 요소를 추출
// const [ch1,ch2, ,ch4] = arr2;

// console.log(ch1, ch2, ch4);

// 함수 정의
// 함수의 매개변수에 구조분해 문법을 사용
// 3번째 요소는 건너띄고 4번째 요소를 추출
function func([ch1, ch2, ,ch4]) {
  console.log(ch1, ch2, ch4);
}

// 배열의 두번째 요소와 세번째 요소를 전달
func(arr2);

// 함수의 인자로 배열을 바로 입력
func(['h','e','l','l','o']);
