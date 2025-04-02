// 배열 안에 요소를 변경하여 새로운 배열 만들기
// sort: 정렬
// filter: 필터링(제거)
// map: 내용을 새롭게 교체

const arr = [1, 2, 3, 4, 5];

// 배열요소의 값을 2배로 수정
// 함수의 매개변수: value index array
// 함수의 리턴값: 새로운 값
// const newArr = arr.map(function(value){
//   return value * 2;
// });
// console.log(newArr);

// 객체 배열을 사용해서 내용 변경하기

const personList = [
  { firstName: '재석', lastName: '유' },
  { firstName: '종국', lastName: '김' },
  { firstName: '세찬', lastName: '양' },
];
console.log(personList);

// 성과 이름을 조합하여 풀네임 속성 만들기
// 풀네임 속성을 object에 추가

const personList2 = personList.map(function (value) {
  return {
    firstName: value.firstName,
    lastName: value.lastName,
    fullName: value.lastName + value.firstName
  };
});
console.log(personList2);

const personList3 = personList.map(value=> {
  return {
    firstName: value.firstName,
    lastName: value.lastName,
    fullName: value.lastName + value.firstName
  };
});
console.log(personList3);

const personList4 = personList.map(value=> {
  value.fullName = value.lastName + value.firstName;
  return personList;
});
console.log(personList4);