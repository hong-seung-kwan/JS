// Q12
const readBooks = new Set();

readBooks.add('해리포터');
readBooks.add('반지의 제왕');
readBooks.add('어린왕자');
readBooks.add('데미안');
readBooks.add('1984');
readBooks.add('위대한 개츠비');

// 읽은 책 목록 출력
for( const book of readBooks){
  console.log(book);
}

// 제목이 7글자 이상인 책 삭제

// set을 순회하면서 책을 하나씩 꺼내기
for(const book of readBooks) {
  // console.log(book, typeof book, book.length);
  if(book.length >= 7){
    readBooks.delete(book);
    console.log(`${book}를 책 목록에서 삭제했습니다.`);
  }
}

// 두번째 회원이 읽은 책 목록 생성

const readBooks2 = new Set();

readBooks2.add('어린왕자');
readBooks2.add('1984');
readBooks2.add('노인과 바다');
readBooks2.add('그리스인 조르바');

console.log(readBooks);
console.log(readBooks2);

// 두 회원이 읽은 책을 비교해서, 공통으로 읽은 책 찾기

// 공통으로 읽은 책을 담을 set 생성
const commonBooks = new Set();

for( const book of readBooks2){
  // console.log('첫번째 회원의 책목록: ', readBooks);
  // console.log('두번째 회원의 책: ',book)
  // console.log(readBooks.has(book));
  if(readBooks.has(book)){
    commonBooks.add(book);
  }
}
console.log(commonBooks);

