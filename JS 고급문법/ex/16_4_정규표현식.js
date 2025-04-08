// 정규표현식에 특수문자 사용하기

// 정규표현식 생성

// \w => 문자를 의미 (A~Z a~z 0~9)
// + => 문자 하나 이상
// \s => 공백
const regex = /(\w+)/;
// 원본 문자열
const str = '012'

const result = regex.test(str);
console.log(result);

const regex2 = /(\w+)\s(\w+)/;

//const str2 = 'abcd';

// 'abcd'는 중간에 공백이 없기 때문에 false
console.log(regex2.test('abcd'));
// 'ab cd'는 중간에 공백이 있기 때문에 true
console.log(regex2.test('ab cd'));
// 'abcd ' 는 마지막에 공백이 있지만 그뒤에 문자는 없기 때문에 false
console.log(regex2.test('abcd '));
// 'a bcd'는 중간에 공백이 있기 때문에 true
console.log(regex2.test('a bcd'));

