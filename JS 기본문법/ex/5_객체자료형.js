// 객체형 변수 선언하기
// 객체 표현 {}중괄호
// 객체는 프로퍼티와 함수로 구성된다
const user = {
  name : '둘리', // 프로퍼티 (키:값)
  age : 10,
  getName: function() { // 함수
    console.log(this.name);
  }
};

// 객체 안에 프로퍼티 꺼내기
// 객체명.프로퍼티명
console.log(user.name); // 둘리
// 객체명[프로퍼티명]
console.log(user["age"]); // 10
user.getName(); // 둘리