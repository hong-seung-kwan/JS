// rest 파라미터: 함수의 나머지 파라미터

// 함수 정의
// 전달받은 파라미터를 모두 출력하는 함수
// ...rest : 나머지 파라미터.
// 전달받은 인자의 개수와 상관없이 모두 배열로 수집
// 첫번째와 두번째 인자는 따로 수집하고 싶으면 -> 변수 선언
// rest 파라미터: 함수의 나머지 파라미터
// rest 파라미터 위치: 매개변수의 마지막
function func(a, b, ...rest) {
  console.log(a, b);
  console.log(rest);
}
func(1, 2, 3);
func(1, 2, 3, 4, 5);

// rest 파라미터를 활용하여 숫자들의 합계 구하기
// rest 파라미터는 전달받은 인자를 배열로 수집
// rest 파라미터의 이름은 상관없음
// 단 ... 있어야함
function sum(...arr) {
  let total = 0;
  for(let num of arr){
    total = total + num;
  }
  console.log(total);
}

sum(1,2,3);
sum(10,20,30,40,50);