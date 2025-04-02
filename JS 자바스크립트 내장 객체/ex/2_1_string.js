// String 객체
// String 객체가 제공하는 함수 알아보기

// 문자열의 길이
let text = "ABCDE";
console.log(text.length); // 5

// 특정 문자열이 포함되어있는지 확인
// indexOf: 특정 문자열의 시작 index를 반환
let str = "안녕하세요 저는 둘리입니다";
console.log(str.indexOf('둘리')); // 9
console.log(str.indexOf('또치')); // -1

// lastIndexOf: 검색 대상이 여러개 있으면
// 제일 마지막에 있는 문자열의 위치를 반환
let str2 = "둘리 둘리 둘리";
console.log(str2.lastIndexOf('둘리')); // 6
console.log(str2.lastIndexOf('또치')); // 없으면 -1

// slice: 문자열에서 특정 부분만 잘라서 반환
let fruit = '사과, 바나나, 키위';
console.log(fruit.slice(9,11)); // 시작위치, 마지막위치(포함x)
// 위는 index 10 => 키위를 추출하려면 마지막위치는 10+1

// 마지막 인덱스가 없으면 9부터 끝까지 읽음
console.log(fruit.slice(9));
console.log(fruit.length);

// substring: slice 처럼 문자열을 자르는 함수
console.log(fruit.substring(9,11)); // 키위
// 시작위치와 마지막위치가 반대로 되어 있으면 자동으로 교체!
console.log(fruit.substring(11,9)); // 키위

// replace: 특정 문자열을 교체하는 함수
// 대상, 새로운 문자열
console.log(fruit.replace('바나나','딸기'));

let hello = "Hellow World";

// 대소문자 변환
console.log(hello.toLowerCase());
console.log(hello.toUpperCase());

// string 변수를 만들어서 string 객체의 함수 사용
let string1 = 'hello';
let string2 = 'world';
let newStr = string1.concat(string2);
console.log(newStr);

// string 값으로 string 객체의 함수 사용
// trim: 문자열의 앞뒤 공백 제거
console.log("   hello world   ".trim());

// pad~(): 자리수를 채우는 함수
// 자리수, 자리를 채울 문자
let number = '5';
console.log(number.padStart(4,0));
console.log(number.padEnd(4, 0));

// charAt: 특정위치에 있는 문자 하나 추출
console.log("hello world".charAt(2));

let birthday = '1997-06-12';
// split: 구분자를 기준으로 문자열을 자르는 함수
// - : 구분자
console.log(birthday.split('-'));

//
let url = 'http://website.com';

// startsWith : 특정 문자열로 시작되는지 확인하는 함수
if(url.startsWith('https://')) {
  console.log('올바른 형식의 사이트 주소입니다');
}else{
  console.log('잘못된 형식의 사이트 주소입니다..')
}

let fileName = 'abc.pdf';
// endsWith: 특정 문자열로 끝나는지 확인하는 함수
if(fileName.endsWith('pdf')) {
  console.log('pdf 파일이 맞습니다!')
} else {
  console.log('pdf 파일이 아닙니다..')
}

// string은 배열처럼 사용할 수 있다
// 인덱스를 사용하여 문자를 하나씩 추출
let str4 = 'hello';

console.log(str4[0]);
console.log(str4[1]);
console.log(str4[2]);
console.log(str4[3]);
console.log(str4[4]);

// for 요소를 저장할 변수 of 배열(또는 string)
for(const ch of str4) {
  console.log(ch);
}
// repeat: 문자열을 반복하는 함수
console.log("a".repeat(5)); // aaaaa
console.log("abc".repeat(2)); // abcabc