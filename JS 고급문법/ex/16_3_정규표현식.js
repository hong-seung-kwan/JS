// 정규표현식 생성
const regex = /a/;

// 문자열이 제공하는 match함수를 사용하여 a가 포함되어 있는지 확인
// 결과는 값 + 위치로 반환됨
const result = 'abcde'.match(regex);
console.log(result);

console.log(regex.exec('abcde'));

// 정규표현식에 특수문자(플래그) 사용하기
// i: 대소문자 구분 안함

// 정규표현식 생성
const regex2 = /a/i;
const result2 = 'abcde'.match(regex2);
const result3 = 'ABCDE'.match(regex2);
console.log(result2);
console.log(result3);

// 정규표현식에 특수문자(플래그) 사용하기
// g: 패턴에 해당하는 모든 문자를 추출

// 정규표현식 생성
const regex3 = /a/g;

const result4 = 'abcdea'.match(regex3);

console.log(result4);

// ig: i플래그 + g플래그 조합

const regex4 = /a/ig;

const result5 = 'ABcdea'.match(regex4);
console.log(result5);