// 함수의 매개변수에 기본값 설정하기

// 곱셈 함수 정의
// 두수를 입력받아 곱을 출력
// 오류를 방지하기 위해 매개변수 검사하기\

function multiply(a, b){
  // b에 잘못된 값이 들어왔으면 1로 초기화
  if(b == undefined){
    console.log('b는 잘못된 값입니다');
    b = 1;
  }
  console.log( a * b );
}
// multiply(2); // 결과: NaN (잘못된 값)

// 더 간단하게 처리

//함수 정의
// 함수의 매개변수에 기본값 설정
// 함수 호출시 전달받은 값이 있으면 그래도
// 그렇지 않으면 기본값 1을 사용
function multiply2(a, b = 1){
  console.log(a * b);
}
multiply2(5, 5); // a:5 b:5
multiply2(5); // a:5 b:1

// 전달받은 텍스트를 출력하는 함수 정의
// 매개변수에 초기값 설정
// 전달받은 인자가 있으면 그대로 사용
// 없으면 초기값 사용
function func(str = '전달받은 파라미터가 없어요..') {
  console.log(str);
}
func();