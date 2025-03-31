// 자료형: 기초/객체

// 문자열
// 값을 표현할때는 ''작은따음표 또는 ""큰따음표 사용
const myName = '둘리';
const email = "user@naver.com";
// 문자열 안에서 변수 사용하기
// ``(백틱)
const str = `hello ${myName}`;
console.log(str); // hello 둘리

// 숫자 (type: Number)
// 숫자는 양수,음수,실수 구분이 없음
const number = 123; // 양수 0 음수
const opacity = 0.57; // 실수

// Boolean
const checked = true; // 참
const isShow = false; // 거짓

// undefined (아무것도 정의되지 않은 상태)
// 변수만 선언하고 초기화를 하지 않은 상태
let undef;
console.log(undef); // undefined

// null (빈값)
// undefined와 다름
// 빈값은 사용자가 입력해야함
let name = null;
console.log(name); // null