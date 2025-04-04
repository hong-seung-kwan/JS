// 문자열 안에 변수 삽입하기

const name = '또치';

// `` 백틱
// 변수는 ${}
console.log(`안녕하세요. ${name}님`)

const firstName = '길동';
const lastName = '고';

console.log(`${lastName} ${firstName}`);

// 문자열 안에 변수와 계산식 삽입하기
const a = 5;
const b = 10;

console.log(`${a} + ${b} = ${a+b} `);
