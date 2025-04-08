// 정규표현식: 문자열의 형식을 검사할때 사용하는 패턴

// 정규표현식 만들기

const regex = /a/;
const regex2 = new RegExp('a');

// 정규표현식을 사용하여 문자열 안에 패턴이 포함되었는지 검사

// 'abcde'라는 문자열 안에 'a'가 포함되었는지 확인
const result = regex.exec('abcde');
console.log(result);

const result2 = regex.exec('bcde');
console.log(result2);

// test: 원본문자열안에 a가 포함되어 있는지 확인
// 결과를 boolean으로 반환
const result3 = regex.test('abcde');
console.log(result3);

const result4 = regex.test('bcde');
console.log(result4);

// 정규표현식 생성
// .의 의미: 뒤에 있는 문자 하나까지 포함
const regex3 = /a./;

const result5 = regex3.exec('abcde');

console.log(result5);