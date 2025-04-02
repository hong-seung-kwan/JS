// for-in
// 배열의 index를 순차적으로 꺼내는 for문
const arr = ['사과', '바나나', '딸기'];

for(const index in arr){
  console.log(index, arr[index]);
}

// for in은 배열 또는 객체에 사용 가능
// 배열에서는 index 객체에서는 key를 추출
// 객체 생성
const obj = {a : 1, b : 2, c : 3};
// object의 프로퍼티를 꺼내는 방법: 도트(.) 대괄호[""]
for(const key in obj) {
  console.log(key, obj[key]);
}

const person = {name : '둘리', age : 20, address : '인천 연수구'};
// for in 을 사용해서 person의 key만 추출
for(const key in person) {
// 다시 key를 이용해서 value 추출
// // key로 변수를 사용할때는 대괄호를 쓸 것
  console.log(key,person[key]);
}

// for-of문
// 배열을 순회하면서 값을 꺼냄
// 배열만 사용 가능
for(const value of arr) {
  console.log(value);
}

const str = 'hello';

for(const char of str){
  console.log(char);
}

// for-in: 배열 안에 있는 인덱스를 꺼냄
// 배열 또는 객체에 사용 가능
// for-on: 배열 안에 있는 값을 꺼냄
// 배열 또는 문자열에 사용 가능