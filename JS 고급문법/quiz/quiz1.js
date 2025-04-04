//Q1
function greet(a,b = "안녕하세요"){
  console.log(`${b}, ${a}님!`);
}
// greet("철수", "반갑습니다");
// greet("훈이");

// Q2
function calculateGrade(a,...rest) {
  let sum = 0;
  let avg = 0;
  for(const num of rest){
    sum = sum + num;
    avg = (sum/rest.length).toFixed(1);
  }
  console.log(`${a}님의 평균 성적은 ${avg}점입니다.`);
}
// calculateGrade("철수",85, 90, 78);
// calculateGrade("훈이",80);

// 각 과목의 점수에 기본값 설정
function calcAvgScore(name,eng= 0,math = 0,kor = 0){
  // 평균점수: 총점 / 과목의 수

  // 총점
  const total = eng + math + kor;

  // 평균점수
  // Number 객체으 함수를 사용하여 소수점 아래 정리
  const avg = total / 3;

  console.log(`${name}님의 평균 점수는 ${avg.toFixed(2)}점 입니다`);
}
calcAvgScore("철수",85,90,78);
calcAvgScore("훈이",80);



// Q3
// 사람의 정보를 입력받아 출력하는 함수
// 첫번째 매개변수: 이름
// 두번쨰 매개변수: 나이
// 나머지: 취미
// rest 파라미터: 개수와 상관없이 배열로 수집
function printPerson(name, age, ...hobby){
  // 배열이 가지고 있는 함수를 사용하여 문자열 결합 : join(구분자)
  const hobbys = hobby.join(", ");
  console.log(`${name}의 나이는${age}이고, 취미는 ${hobbys}입니다.`);
}
printPerson("맹구",5,"축구","독서","영화 감상");
printPerson("유리",5,"소꿉놀이");

