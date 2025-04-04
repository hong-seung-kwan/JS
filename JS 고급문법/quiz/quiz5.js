// Q18
const book = {
  title: '위대한 개츠비',
  author: '스콧 피츠제럴드',
  publishedYear: 1925
};

const copyBook = { ...book };
console.log(copyBook);
copyBook.publishedYear = 2023;

console.log('원본객체의 출판년도: ' + book.publishedYear)
console.log('복사된객체의 출판년도: ' + copyBook.publishedYear);

// Q19
const book2 = {
  title: '자바 프로그래밍 입문',
  author: {
    firstName: '은종',
    lastName: '박'
  }
};

const copyBook2 = JSON.stringify(book2);
const cbook = JSON.parse(copyBook2);
cbook.author.lastName = '김';

console.log('원본객체의 성: ' + book2.author.lastName);
console.log('복사된객체의 성: ' + cbook.author.lastName);