// 새로운 책을 등록하는 함수
function registerBook() {
  // 사용자가 입력한 값을 검사
  // 1. 카테고리, 도서명, 가격 있는지
  const categoryInput = document.getElementById('category');
  const category = categoryInput.value;
  const booknameInput = document.getElementById('bookname');
  const bookname = booknameInput.value;
  const bookpriceInput = document.getElementById('bookprice');
  const bookprice = bookpriceInput.value;

  // console.log(category,bookname,bookprice);

  // 값이 입력되지 않았다면 함수를 여기서 종료
  // 여기서는 if~else문 x
  // 카테고리, 도서명, 가격을 각각 검사해야해서 if문 따로 작성
  if (category == '') {
    alert('카테고리가 선택되지 않았습니다')
    return;
  }
  if (bookname == '') {
    alert('도서명이 입력되지 않았습니다')
    return;
  }
  if (bookprice == '') {
    alert('가격이 입력되지 않았습니다')
    return;
  }

  // 2. 같은 카테고리 안에 동일한 책의 이름이 있는지
  // 단, 카테고리가 다르면 상관없음
  // html 태그 안에 있는 도서 데이터만 꺼내고 싶음
  // json xml html ... => data 꺼내기 (파싱)
  // 도서 목록 데이터를 구하는 함수 만들기

  // 도서 목록 조회
  const books = getBookList();

  // 같은 안에 중복되는 책이 있는지 확인
  // 카테고리 다르면 상관x
  for (const book of books) {
    // 도서 목록의 책이름과 사용자가 입력한 책이름을 비교
    // 도서 목록의 카테고리와 사용자가 입력한 카테고리 비교
    // 카테고리를 먼저 비교하고 책이름을 비교하는 것이 흐름에 맞음
    if (book.category == category && book.bookname == bookname) {
      alert('같은 카테고리 안에 동일한 책이 중복되어 있습니다.');
      return;
    }
  }

  // 사용자가 입력한 값에 문제가 없다면, 책 등록

  // 부모인 tr 태그 먼저 생성
  const newTr = document.createElement('tr');
  // 도서번호, 카테고리, 도서명, 가격, 버튼 셀 생성
  const newBookno = document.createElement('td');
  // 데이터 구분: 사용자가 입력한 데이터 / 시스템이 생성하는 데이터
  // 새로운 도서의 번호: 배열의 크기 + 1
  newBookno.textContent = books.length + 1;
  const newCategory = document.createElement('td');
  newCategory.textContent = category;
  const newBookname = document.createElement('td');
  newBookname.textContent = bookname;
  const newBookprice = document.createElement('td');
  newBookprice.textContent = bookprice + '원';
  const newRemove = document.createElement('td');
  const btn = document.createElement('button');
  btn.textContent = '삭제';
  // 버튼은 자바스크립트에서 동적으로 생성됨
  // 따라서 버튼이 생성될때 이벤트를 등록해야함
  btn.addEventListener('click' ,() =>{
    // 버튼 클릭하면 tr이 삭제
    newTr.remove();
  });
  newRemove.appendChild(btn);
  // tr 태그에 td들을 추가
  newTr.appendChild(newBookno);
  newTr.appendChild(newCategory);
  newTr.appendChild(newBookname);
  newTr.appendChild(newBookprice);
  newTr.appendChild(newRemove);
  // table에 새로운 tr을 추가
  const table = document.getElementById('book-list-tbody');
  table.appendChild(newTr);

  // 추가 후 폼 초기화
  categoryInput.value = '';
  booknameInput.value = '';
  bookpriceInput.value = '';

  alert('도서가 성공적으로 등록되었습니다.')
}

// 테이블에서 도서 데이터를 꺼내서 배열로 반환하는 함수
// 배열에서 제공하는 함수를 활용하면 기능을 쉽게 구현할 수 있음
function getBookList() {

  // 테이블 가져오기
  const table = document.getElementById('book-list-tbody');
  // 테이블 아래 있는 행 가져오기
  // table 태그 아래부터 검색 (검색 범위 좁히기)
  const trs = table.getElementsByTagName('tr');
  const books = [];

  // 각 행의 있는 도서 정보를 꺼내서 배열로 만들기 (파싱)
  for (const tr of trs) {
    // 각 행에 있는 셀 꺼내기 (범위 tr태그로 제한)
    const tds = tr.getElementsByTagName('td');
    // console.log(tds[0], tds[0].textContent);
    // console.log(tds[1], tds[1].textContent);
    // console.log(tds[2], tds[2].textContent);
    // console.log(tds[3], tds[3].textContent);
    // 배열에 추가할 객체 만들기
    const book = {
      no: tds[0].textContent,
      category: tds[1].textContent,
      bookname: tds[2].textContent,
      bookprice: tds[3].textContent
    }

    // 완성한 객체를 배열에 추가
    books.push(book);
  }
  // console.log(books);

  // 도서 목록 배열을 반환
  return books;
}

// 가격을 기준으로 도서 목록 정렬
function sortBookList() {
  // 사용자가 선택한 정렬 방식 가져오기
  const select = document.getElementById('sort-select');
  const sorttype = select.value;

  // 정렬 대상 : 도서 목록
  // 도서 목록을 조회하는 함수는 도서등록,정렬,검색 함수에 활용
  const books = getBookList();
  // 오름차순 정렬 내림차순 정렬
  if(sorttype == 'ascending'){
    // 배열에서 제공하는 함수 사용
    // 매개변수: 배열에 연속된 두개의 요소
    // 양수가 반환되면 자리 교체
    books.sort((book1, book2)=>{
      //console.log(typeof book1.bookprice, typeof book2.bookprice);
      // string 값은 비교 불가
      // string -> number 타입 변환
      const price1 = parseInt(book1.bookprice);
      const price2 = parseInt(book2.bookprice);
      // 앞에 있는 도서의 가격이 더 낮으면 교체
      return price1 - price2;
    });
  }else if(sorttype == 'descending'){
    books.sort((book1,book2) => {
      const price1 = parseInt(book1.bookprice);
      const price2 = parseInt(book2.bookprice);
      return price2 - price1;
    })
  }
  // console.log(books);

  // 정렬한 도서 목록으로 테이블 다시 그리기
  showBookList(books);  

}

// 테이블을 다시 그리는 함수
// 매개변수: 배열
function showBookList(list){
  // 1. 기존 테이블 날리기
  const tableBody = document.getElementById('book-list-tbody');
  tableBody.innerHTML = '';

  // 2. 배열 데이터를 사용해서 테이블 다시 그리기
  for(const book of list){
    // 새로운 행
    const newTr = document.createElement('tr');
    // 새로운 열
    const newBookno = document.createElement('td');
    newBookno.textContent = book.no;
    const newCategory = document.createElement('td');
    newCategory.textContent = book.category;
    const newBookName = document.createElement('td');
    newBookName.textContent = book.bookname;
    const newBookPrice = document.createElement('td');
    newBookPrice.textContent = book.bookprice;
    const newRemove = document.createElement('td');
    const btn = document.createElement('button');
    btn.textContent = '삭제';
    btn.addEventListener('click', ()=>{
      newTr.remove();
    });
    // 마지막 셀에 버튼
    newRemove.appendChild(btn);

    newTr.appendChild(newBookno);
    newTr.appendChild(newCategory);
    newTr.appendChild(newBookName);
    newTr.appendChild(newBookPrice);
    newTr.appendChild(newRemove);
    // 마지막으로 tbody에 tr을 추가
    tableBody.appendChild(newTr);
  }
}

// 도서명으로 도서를 검색하는 함수
function searchBook(){
  // 검색 필드 가져오기
  const searchInput = document.getElementById('search-input');
  const search = searchInput.value;

  // 입력된 값이 없으면 검색 종료
  if(search == ''){
    alert('입력된 키워드가 없습니다..');
    return;
  }

  // 입력된 값이 있으면 검색을 진행
  // 현재 도서 목록에 같은 이름을 가지고 있는 도서가 있는지?
  // 도서 목록 조회
  const books = getBookList();

  // 배열이 제공하는 filter 함수 사용
  // 매개변수: 도서객체 , 리턴값: boolean
  // filter함수 : true면 요소 유지 false 요소 제거
  const filteredList = books.filter((book)=>{
    console.log(book);
    // 정규표현식
    // 책 제목에 키워드가 포함되어있는지
    const regex = new RegExp(search);
    const result = regex.test(book.bookname);
    return result;
  });
  // console.log(filteredList);

  // 필터링된 배열로 테이블 다시 그리기
  showBookList(filteredList);
}