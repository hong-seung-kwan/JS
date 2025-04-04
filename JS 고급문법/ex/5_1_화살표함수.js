// 일반 함수 화살표 함수로 바꾸기
// 화살표 함수를 사용하는 이유: 코드를 간단하게 작성하기 위해서

// 일반함수
const hello1 = function(name) {
  return "Hello" + name;
};

// 화살표 함수
const hello2 = (name) => "Hello" + name;

// 익명함수는 변수이름을 사용하여 호출  
const result = hello2('둘리');
console.log(result);

// 일반 함수 정의
const func1 = function(){
  console.log('aa');
  console.log('bb');
}

// 화살표 함수
// 구현부의 코드가 여러줄일때는 {}블록을 생략할 수 없다
const func2 = ()=>{
  console.log('aa');
  console.log('bb');
}
func2();