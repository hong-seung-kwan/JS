// Q12
const readBook = new Set();

readBook.add('해리포터');
readBook.add('반지의 제왕');
readBook.add('어린왕자');
readBook.add('데미안');
readBook.add('1984');
readBook.add('위대한 개츠비');

for (let book of readBook) {
  console.log(book);
}


for (let book of readBook) {
  console.log(book);
  if (book.length >= 7) {
    readBook.delete(book);
    console.log(`${book}책 목록에서 삭제했습니다.`);
  }
}

const friendBook = new Set();

friendBook.add('어린왕자');
friendBook.add('1984');
friendBook.add('노인과 바다');
friendBook.add('그리스인 조르바');

for (let book of friendBook) {
  console.log(book);
}

const books = new Set();

for (let book of readBook) {
  if (friendBook.has(book)) {
    books.add(book);
  }
}
console.log(books);
