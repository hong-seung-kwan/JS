// Q18
const book = {
  title: '위대한 개츠비',
  author: '스콧 피츠제럴드',
  publishedYear: 1925
};

const copy = { ...book };
copy.title = '(new)위대한 개츠비';

console.log(book);
console.log(copy);

// Q19
const book2 = {
  title: '자바 프로그래밍 입문',
  author: {
    firstName: '은종',
    lastName: '박'
  }
};
// json 함수를 사용하여 객체를 복사
// object => string 변환
const str = JSON.stringify(book2);
console.log(str, typeof str);

// 다시 string -> object로 변환
const copy2 = JSON.parse(str);
copy2.author.lastName = '김';
console.log(book2);
console.log(copy2);

// 객체를 복사하는 방법
// 1. 스프래드 연산자 -> 단순 객체는 가능.
// 2. json 객체의 함수 -> 모두 가능

