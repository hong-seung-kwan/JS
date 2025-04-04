// rest 파라미터를 활용하여 학생들의 시험점수를 계산하는 프로그램 구현

// 매개변수: 과목명, 학생 리스트
// 결과: 특정과목의 평균점수
function calcAvgScore(subject, ...students) {
  console.log('과목명:', subject);
  console.log('학생 목록:', students);

  // 영어점수가 있는 학생 찾기
  // student(배열)이 가지고 있는 filter 함수
  // filter 함수의 인자는 함수
  // 그 함수의 매개변수는 value, index, arr
  // 그 함수의 리턴값은 boolean
  const filterList = students.filter((student) => {
    // object가 가지고 있는 영어점수 꺼내기
    // 첫번쨰 방법은 key를 그대로 해석하여 student.subject
    // 두번째 방법은 subject를 변수로 사용하여 student.eng
    // 따라서 변수를 key로 사용할 때는 두번째 방법을 사용
    // 학생이 영어점수를 가지고 있으면 true 아니면 false
    return student[subject] != undefined;
  });
  // 영어 과목의 평균 점수 구하기
  // 총점 / 학생의 수

  // 영어점수의 합계 => 누적값 => reduce
  // 인자: 함수, 초기값
  const sum = filterList.reduce((total, student) => {

    return total + student[subject]; // total + student['eng']
  }, 0)
  console.log(`점수의 합계: ${sum}`);

  // 학생수
  const count = filterList.length;

  // toFixed 소수점 이하 자리 1자리까지만
  return (sum / count).toFixed(1);
}

// 학생 리스트
const student1 = { name: '짱구', eng: 80, math: 50, kor: 70 };
const student2 = { name: '철수', eng: 90, math: 85, kor: 88 };
const student3 = { name: '훈이', eng: 75, math: 95, kor: 92 };
// 맹구는 수학점수와 국어점수가 없음
const student4 = { name: '맹구', eng: 80 };
// 유리는 영어점수가 없음
const student5 = { name: '유리', math: 50, kor: 70 };

// 첫번째 인자: 과목명
// 나머지: 학생 리스트 (개수 상관 x)
// 모든 학생의 영어 평균점수 구하기
// const result1 = calcAvgScore('eng', student1, student2, student3, student4, student5);

// console.log(`전체 영어 평균 점수는 ${result1}점 입니다`);

// const result2 = calcAvgScore('math',student1, student2, student3);
// console.log(`짱구,철수,훈이의 수학 평균점수는 ${result2}점 입니다`);

const result3 = calcAvgScore('kor', student4, student5);
console.log(`맹구와 유리의 국어 평균 점수는 ${result3}점 입니다`);