// 플래그와 특수기호를 사용하여 정규표현식 만들기

// 원본 문자열 생성
const str = 'Is this all There is';

// 정규표현식 생성
// [hat] => 'h' 'a' 't' 문자 중에서 하나를 찾음
// g플래그: 전역에서 검사. 일치하는 모든 문자를 추출
// i플래그: 대소문자 상관없이 검사
const regex = /[hat]/gi;

// 제일 처음 나오는 t만 반환됨
console.log(str.match(regex));

const str2 = '123abc45kkk';

// 정규표현식 생성
// 0부터 9까지 숫자 찾기
// g플래그: 전역에서 검사. 일치하는 모든 문자를 추출
const regex2 = /[0-9]/g;
console.log(str2.match(regex2));

// 숫자 찾기 -> \d
const regex3 = /\d/g;
console.log(str2.match(regex3));

const str3 = 'Hellooo';

// +: 문자o가 하나이상 연속되는 부분 찾기
const regex4 = /o+/;
console.log(str3.match(regex4));
// * => 'l' 다음에 'o'가 0개 이상 있는 부분
const regex5 = /lo*/g;
console.log(str3.match(regex5));

const str4 = '1 100 1000';

// ? => '1' 다음에 '0'가 0개 또는 1개
const regex6 = /10?/g;

console.log(str4.match(regex6));