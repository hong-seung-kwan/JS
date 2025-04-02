// 배열에서 조건을 만족하는 요소만 찾기

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter: 조건을 만족하지 않는 요소는 제거하고
// 조건을 만족하는 요소만 모아서 새로운 배열을 생성

// filter 함수의 인자는 함수
// 그 함수의 매개변수는 value, index, array
// 하지만 모든 함수를 선언할 필요는 없음
// 매개변수는 필요한 것만 사용
// 함수의 리턴값은 boolean
// filter 함수는 원본데이터에 영향 없음
// false가 반환되면 제거, true가 반환되면 유지
const newArr = arr.filter(function(value){
  // 배열의 요소가 5보다 크면 true
  return value > 5;
});
console.log(newArr);
// 1 > 5 => false
// 2 > 5 => false
// ,,,
// 6 > 5 => true
// 7 > 5 => true
// ,,,
// 결론: 원하는 결과에 따라 sort나 filter 함수의 return 식을 만들어야함

// 객체 배열을 사용해서 필터링 하기
const studentList = [
  {name: '둘리', point:100},
  {name: '또치', point:60},
  {name: '도우너', point:80},
  {name: '고길동', point:65}
];

// 시험점수가 70점 이상이면 시험에 통과
// 시험을 통과한 학생 리스트 만들기
// 함수의 매개변수: value, index, array
// 함수의 리턴값: boolean
// 결과가 true면 유지, false면 제거
const student = studentList.filter(function(value){
  return value.point >= 70;
});
console.log(student);

// 익명함수를 화살표함수로 변경
const student2 = studentList.filter((value) => value.point >= 70);