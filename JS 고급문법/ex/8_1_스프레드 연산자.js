// 배열 분해
const arr1 = [1, 2, 3];
const arr2 = [4,5,6];
console.log(arr1);
// ... => 스프레드 연산자
console.log(...arr1);

// 두 배열을 하나로 합치기
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// 문자열 분해하기

const str = 'cd';

// 배열 요소와 문자열을 조합
const arr = ['a','b',...str];

console.log(arr);

// 스프레드 연산자를 사용하여 객체 합치기
const obj1 = {name: '짱구', age:10};
const obj2 = {address:'인천 연수구~'};

const newObj = {...obj1, ...obj2};

console.log(newObj);


// 문자열에 스프레드 연산자를 사용하면 문자단위로 쪼개짐
const str2 = '안녕하세요';
console.log(...str2);

const str3 = 'hello';
console.log(...str3);

// 스프레드 연산자를 사용하여 문자열을 배열로 변환
const arr4 = [...str2];
console.log(arr4);