// 배열 만들기
// 배열은 []대괄호를 사용
// [] 안에 요소를 나열
const arr1 = ["Apple", "Banana", "Cherry"];

// 배열 안에 있는 요소를 꺼내기
// 인덱스[number]를 사용
// 인덱스 : 0 ~ 크기-1
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

// 배열이 가지고 있는 함수 사용하기

// 배열이 Apple이 포함되어 있는지 확인
let result = arr1.includes('aa')
console.log(result); // false

// 두번째 배열
// 자바스크립트의 배열은 다양한 값을 저장할 수 있다
// 자료형이 달라도 함께 저장할 수 있다
const arr2 = [ 'a', 'b', 1, 2, true ];
console.log(arr2);
// 배열에 값 추가하기
arr2.push(3);
console.log(arr2);

// const => 상수
// 상수는 값을 변경할 수 없다
// 배열객체는 참조변수로 주소를 저장한다
// 실제 값의 목록은 힙 영역에 저장되어 있다
// 따라서 주소가 변경되지 않았기 때문에 목록을 변경할수있다

// 객체형 배열 만들기
const objArr = [];
objArr.push({name : '둘리', age: 10 });
objArr.push({name : '도우너', age: 15 });
console.log(objArr);

// 배열 안에 있는 요소 하나씩 꺼내기
console.log(objArr[0]);
console.log(objArr[1]);

// 배열의 크기
console.log(objArr.length);