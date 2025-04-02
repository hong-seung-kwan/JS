// 배열 안에 값을 사용해서 누적값을 계산

// sort,filter,map:: 배열을 리턴
// reduce: 숫자를 리턴

const arr = [40, 100, 1, 5, 25];

// reduce 의 인자는 함수
// 함수의 매개변수: previousValue, currentValue, currentIndex, arr
// 함수의 리턴값: 누적값
// previousValue: 지금까지 누적된값, currentValue: 배열의 현재 요소
// preValue는 처음에 배열에 첫번째 요소로 초기화
// 그 다음부터는 누적값
const result = arr.reduce((preValue, curValue) => {
  console.log(preValue,curValue)
  return preValue + curValue;
});
console.log(result);