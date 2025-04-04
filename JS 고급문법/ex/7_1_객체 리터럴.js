// 객체 만들기
// value에 변수 넣기

const name = '둘리';
const age = 20;


const person = {
  pname: name,
  page: age
}

console.log(person);

// 객체의 값이 가변적으로 변할 때 사용

// 변수를 활용하여 객체 만들기
const key1 = 'subjectNm';
const key2 = 'point'

// 객체의 키로 변수 사용하기
// key에 변수를 넣을때는 [] 대괄호를 사용
const score = {
  [key1] : '수학',
  [key2] : 100
}

console.log(score);

// object의 key가 정해지지 않았을 때 변수를 활용

// 변수를 활용하여 객체 만들기
const obj = {
  name: '둘리'
}

const key = 'address';

// 객체를 생성한 후에 프로퍼티 추가
obj[key] = '인천 연수구~';

console.log(obj);