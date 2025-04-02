// 배열 정렬하기
// sort 함수는 원본데이터를 변경한다
const fruits = ['banana', 'orange', 'apple', 'mango'];

fruits.sort();
console.log(fruits);

// 배열을 역순으로 정렬
// 알파벳 역순이 아닌 원본 데이터에서 역순으로 정렬
fruits.reverse();
console.log(fruits);

// 정렬 순서를 직접 정의하기
// 배열의 요소가 영어일 때는 알파벳 순서로 정렬
// 숫자는 정렬기준이 명확X
// 배열의 요소가 숫자일 때는 정렬 기준을 직접 정의
// sort 함수는 리턴값이 양수일때, 자리 교체
// 따라서 순정렬을 하고 싶으면 a - b 역정렬은 b - a
const arr = [40, 100, 1, 5];
// 매개변수: 인접해 있는 배열의 요소 두개
arr.sort(function (a, b) {
  return a - b;
  // return b - a; 역순
});
console.log(arr);
// 리턴값이 음수라면 그대로 유지
// 리턴값이 양수라면 자리 교체 => 앞에 있는 값이 더 크면 교체
// a:40 b:100 => -60
// a:100 b:1 => 99
// sort 함수는 순회를 1번만 하지 않고 정렬 끝날때까지 반복

// 객체 목록을 정렬하기
const personList = [
  { name: '유재석', age: 55 },
  { name: '김종국', age: 48 },
  { name: '양세찬', age: 35 },
  { name: '하하', age: 50 },
];
// 사람의 나이를 기준으로 정렬하기 (나이가 어린순으로)
// 리턴값은 숫자. 실수는 안됨
// 매개변수인 a와 b는 단순데이터가 아닌 object
// 따라서 a와 b를 바로 사용할 수 없음
personList.sort(function(a,b){
  return a.age - b.age;
});

console.log(personList);