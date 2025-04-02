// 객체(object) 만들기

// 1.
// object는 {}중괄호를 사용
// 프로퍼티는 key-value 쌍 형태로 작성
const person1 = {
  firstName : '오',
  lastName : '아리',
  age : 17,
  getFullName : function () {
    return this.firstName + this.lastName;
  }
}

// 2. object를 만드는 2번째 방법
const person2 = new Object();

// object에 프로퍼티를 추가
// object.key = value
person2.firstName = '고';
person2.lastName = '길동';
person2.age = 40;

// object에 함수 추가
person2.getFullName = function() {
  return this.firstName + this.lastName;
}

// 두번째 방법은 객체에 프로퍼티를 동적으로 추가할 수 있다