// 함수 선언

// 선언부: function키워드 + 함수이름 + 매개변수
// 반환타입은 없음

// 자바스크립트는 변수를 선언할 때 자료형 지정안함
// 따라서 함수는 모든 값을 리턴할 수 있음
function hello(){
  console.log('안녕하세요');
}

hello();
hello();

// 매개변수와 반환값이 있는 함수
function sum(x, y) {
  return x + y;
}
// 함수 호출할 때 두 수 입력
// 매개변수에 자료형이 없기 때문에 개수만 맞추면됨
// 반환값이 있기 때문에 결과를 저장할 변수 만들어야함
// 반환값이 있는 이유?
// 결과를 함수를 호출하는 쪽에서 사용하기 위해서
const hap = sum(10, 20);
console.log(hap);

const result = sum('a','b');
console.log(result);

// 함수 표현식
// 변수에 함수를 대입하는 방식
// 자바스크립트는 함수도 데이터로 취급하기 때문에 변수에 저장가능
const func = function() {
  console.log('안녕');
}
// 함수명 대신 변수명을 사용하여 호출
func();

// 함수 표현식
// 변수 = 익명함수
const calc = function(a, b) {
  return a + b;
}
// 함수의 리턴값을 별도의 변수에 저장하고 그 변수를 log 함수의 인자로 사용
const result1 = calc(5,5);
console.log(result1);

// 함수의 리턴값을 바로 log함수의 인자로 사용
console.log(calc(10,20));
