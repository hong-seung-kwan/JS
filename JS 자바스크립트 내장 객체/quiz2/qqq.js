const students = [
  { name: "김철수", score: 85, grade: "1학년"},
  { name: "이영희", score: 92, grade: "2학년"},
  { name: "박지훈", score: 76, grade: "3학년"},
  { name: "최유리", score: 88, grade: "1학년"},
  { name: "정민호", score: 54, grade: "1학년"},
  { name: "한서연", score: 63, grade: "2학년"},
  { name: "장동건", score: 71, grade: "3학년"},
  { name: "오지호", score: 80, grade: "3학년"},
];

// 점수가 90점 이상이면 A 70점이상이면 B 70점이하면 C
// 학생 객체에 등급을 추가하여 새로운 배열 생성
// 매개변수: 학생객체
// 리턴값: 새로운값
students.map((obj)=>{
  if(obj.score >= 90){
    obj.level = 'A';
  }else if(obj.score >= 70){
    obj.level = 'B';
  }else{
    obj.level = 'C';
  }
  return obj;
});
console.log(students);

// 성적 내림차순 정렬
// students.sort((a,b)=>{
//   return b.score - a.score;
// });
// console.log(students);

// 1학년 학생 중에서 등급이 'B'인 학생 찾고 점수 총합
const filterList = students.filter((obj)=>{
  console.log(obj, obj.grade == '1학년' && obj.level == 'B');
  return obj.grade == '1학년' && obj.level == 'B';
});
console.log(filterList);

// 누적값 -> reduce
// 인자: 함수, 초기값
// 초기값 설정이 없으면 배열의 첫번째 요소로 설정됨
// 함수의 매개변수: 누적값, 배열의 현재 요소
// 누적값을 0으로 초기화
const sum = filterList.reduce((preValue,curValue)=> {
  console.log('preValue: ', preValue);
  console.log('curValue: ', curValue.score);
  return preValue + curValue.score;
}, 0);
console.log('1학년 중 등급이 ' +"'B'"+'인 학생들의 점수 총합: ' + sum);