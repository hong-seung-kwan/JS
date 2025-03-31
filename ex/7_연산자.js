// 자바스크립트 연산자의 종류

// 대입연산자
let x = 1;

// 비교연산자 (이항)
console.log(1 == 2); // 두 값이 같으면 참
console.log(1 != 2); // 두 값이 다르면 참
console.log(1 > 2); 
console.log(1 >= 2); 
console.log(1 < 2); 
console.log(1 <= 2);

// 숫자1 문자1을 비교
// 자료형은 무시하고 값만 비교
console.log(1 == "1"); // true
// 값과 자료형을 함께 비교
console.log(1 === "1") // false

// 산술 연산자
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2); 
console.log(10 % 2);

// 부정연산자
console.log(x); // 1
console.log(-x); // -1. 부호를 반대로 변경 양수 -> 음수 음수-> 양수

// 증감연산자
// 변수의 앞 또는 뒤에 사용
console.log(++x); // 값을 증가하고 x를 사용
console.log(x++); // x를 먼저 사용하고 값을 증가
console.log(--x); // 값을 감소하고 x를 사용
console.log(x--); // x를 먼저 사용하고 값을 감소
console.log(x);

// 논리 연산자
// 조건이 여러개일때 조건문에서 사용
// && 논리곱: 두 조건이 모두 참이면 참
console.log(true && true); // true
console.log(true && false); // false

// || 논리합: 두 조건이 하나라도 참이면 참
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 문자열 결합 연산자
console.log("좋은" + "하루" + "되세요!");

// 삼항 연산자 (조건문에 가까운)
let point = 50;
// 학생의 점수가 90점 이상이면 시험 통과
// 식 ? 결과1 : 결과2
let grade = point >= 90 ? "pass" : "fail";
console.log(grade);
// 학생의 점수가 조건.
// 조건이 바뀌면 결과도 바뀜.

// 타입 확인 연산자
console.log(typeof "42"); // string
// 정수와 실수는 모두 number
console.log(typeof 42); // number
console.log(typeof 1.12); // number
console.log(typeof true); // boolean
console.log(typeof function(){}); // function
console.log(typeof undefined); // undefined
// 자바스크립트는 null도 객체로 취급한다
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof []); // object