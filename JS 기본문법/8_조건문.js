// 조건문 (if와 switch)

// if문
let year = 2024;

year = 2026;

// 연도가 2025년이면 "정답입니다" 출력
if(year == 2025) { // 조건문

  console.log("정답입니다!"); // 실행코드
}

// if문은 다양한 형태로 작성할 수 있다
// if ~ else
// if~ else(조건을 만족했을때, 그렇지 않을때를 모두)
// 완전한 구조 완성 -> 빈칸 채우기

// 조건을 만족하면 if블록 실행
// 만족하지 않으면 else블록 실행
if(year == 2025) {
  console.log("정답입니다!")
  //만족했을때 수행 코드
} else {
  console.log("오답입니다..")
  //아닐때 수행 코드
}

// if~elseif~else
// 하나의 상황에서 경우의 수가 여러가지 일때
if (year == 2025) {
  console.log("year는 2025와 같습니다")
} else if(year < 2025) {
  console.log("year는 2025보다 작습니다")
} else {
  console.log("year는 2025보다 큽니다")
}

// 버스 프로그램
// 승객의 나이에따라 요금을 지불
const age = 12;
let busFare = 0;

// 7살이하면 요금은 0원
// 8~13 사이면 요금은 450원
// 14~19 사이면 요금은 720원
// 20~70 사이면 1200원
// 70 이상이면 0원
if(age <= 7) {
  busFare = 0;
  console.log("버스요금은" + busFare + "원입니다.")
} else if(age >= 8 && age <= 13) {
  busFare = 450;
  console.log("버스요금은 " + busFare + "원입니다.")
} else if(age >= 14 && age <= 19) {
  busFare = 720;
  console.log("버스요금은" + busFare + "원입니다.")
} else if(age >= 20 && age <= 70) {
  busFare = 1200;
  console.log("버스요금은" + busFare + "원입니다.")
} else {
  busFare = 0;
  console.log("버스요금은" + busFare + "원입니다.")
}

// switch문
// if문은 조건이 포괄적일 때 사용
// switch문은 조건이 값으로 떨어질때 사용

// 선수의 등수에따라 메달 수여
const rank = 5; // 선수의 등수

switch(rank) { // 조건이 되는 변수
  case 1: // 비교할 값
    console.log("금메달 입니다");
    break; // break가 없으면 switch문을 빠져나올 수 없음
  case 2:
    console.log("은메달 입니다");
    break; // case문이 끝나기전에 break 꼭 작성할 것!
  case 3:
    console.log("동메달입니다");
    break;
  default:
    console.log("메달이 없습니다");
}