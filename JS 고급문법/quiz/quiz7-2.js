// Q25
const str = 'I have 2 apples and 3 oranges.';

// 정규표현식 생성
// 숫자를 표함하고 있는지?
// g: 전역 검사
const regex = /[0-9]/g;
const regex2 = /\d/g;
console.log(str.match(regex));

// Q26
const str2 = 'Hello JavaScript is fun!';
// 'a' 'e' 'i' 'o' 'u' 중에 포함된 문자 찾기 => 범위
const regex3 = /[aeiou]/g;
console.log(str2.match(regex3));

// Q29
const str3 = 'baanaaana';
// a 문자가 하나이상 연속된 부분을 찾기
// + => 하나이상 연속
const regex4 = /a+/g;
console.log(str3.match(regex4));

// Q31
const str7 = 'Hello, World! How are you today?';

// 소문자와 대문자를 모두 찾기 => 범위
const regex5 = /[a-z A-Z]/g;
const regex6 = /\w/g;

console.log(str7.match(regex6));

