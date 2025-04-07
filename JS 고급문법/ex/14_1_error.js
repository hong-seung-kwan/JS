// 에러가 발생할 수 있는 상황

// ReferenceError
// 정의되지 않은 함수를 사용하면 에러남
// func();

// RangeError
// 배열의 크기로 음수를 사용할 수 없음
// 5개 크기의 배열을 생성
// const arr = new Array(-1);
// console.log(arr);


// let은 자바스크립트에서 사용하는 예약어이므로 변수명으로 사용할 수 없음
// let let = 10;


// TypeError
// foo는 함수가 아니므로 호출 불가
// let foo = 123;
// foo();


