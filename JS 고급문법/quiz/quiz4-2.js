// Q11
// 이름과 나이 변수에 저장하고, 변수르 사용하여 출력

// 문자열에 변수를 삽입할때는 ``백틱을 사용
const name = '아리'
const age = 17;
console.log(`${name}의 나이는 ${age}입니다`);

// Q15
// 학생의 이름과 점수를 변수에 저장하고
// 시험점수에 따라 합격여부 표시

const studentName ='소영';
const score = 75;
// 점수가 60점 이상이면 합격, 그렇지 않으면 불합격

// 조건식 ? 결과1 : 결과2
const result = score >= 60 ? '합격' : '불합격'  

console.log(`${studentName}의 점수는 ${score}점으로 ${result}입니다`);


// Q16

// 사람의 정보를 담은 객체를 생성
// 그리고 객체에 주소를 추가
const person = {
  name: '철수',
  age : 21
}

// 속성을 변수에 저장
const key = 'address';

person[key] = '인천 남동구 만수동';

console.log(person);
