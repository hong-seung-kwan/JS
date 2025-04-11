// 도서 등록
function registerBook(){
  // 카테고리, 도서명, 가격 입력필드 가져오기
  const category = document.getElementById('category');
  const bookname = document.getElementById('bookname');
  const bookprice = document.getElementById('bookprice');

  // 유효성 체크!
  // 각 입력필드가 비어있는지 확인하고, 값이 없으면 여기서 함수를 종료
  if(category.value == ''){
    alert('카테고리가 선택되지 않았습니다')
    return;
  }
  if(bookname.value == ''){
    alert('도서명이 입력되지 않았습니다')
    return;
  }
  if(bookprice.value == ''){
    alert('가격이 입력되지 않았습니다')
    return;
  }

  // 같은 카테고리 안에 동일한 책이 존재하는지 확인
  // 단, 카테고리가 다르면 상관없음
  // => 여기서 도서 목록 조회 함수 만들고 오기
  const books = getBookList();
  for(const book of books){
    if(book.category == category.value && book.bookname == bookname.value){
      alert("같은 카테고리 안에 동일한 책이 중복되어 있습니다.");
      return;
    }
  }

  // 테이블에 새로운 행 추가
  // 행 생성
  const newTr = document.createElement('tr');
  // 도서번호 셀 생성
  const newBookno = document.createElement('td');
  newBookno.textContent = books.length + 1; // 마지막행 번호: 도서목록 개수 + 1
  // 카테고리 셀 생성
  const newCategory = document.createElement('td');
  newCategory.textContent = category.value;
  // 도서명 셀 생성
  const newBookName = document.createElement('td');
  newBookName.textContent = bookname.value;
  // 가격 셀 생성
  const newBookPrice = document.createElement('td');
  newBookPrice.textContent = bookprice.value + '원'; // 단위 표시
  // 삭제 셀 생성
  const newRemove = document.createElement('td');
  const btn = document.createElement('button'); // 버튼 생성
  btn.textContent = '삭제';
  newRemove.appendChild(btn);
  // 삭제 버튼을 클릭하면 해당 행이 삭제됨
  // 행이 만들어질때 이벤트 리스너로 처리
  btn.addEventListener('click',()=>{
    newTr.remove();
  });

  // 행에 셀들을 추가
  newTr.appendChild(newBookno);
  newTr.appendChild(newCategory);
  newTr.appendChild(newBookName);
  newTr.appendChild(newBookPrice);
  newTr.appendChild(newRemove);
  // 테이블에 행을 추가
  const tableBody = document.getElementById("book-list-tbody");
  tableBody.appendChild(newTr);

  // 추가가 끝났으면 입력폼 초기화
  category.value = '';
  bookname.value = '';
  bookprice.value = '';

  alert('도서가 성공적으로 등록되었습니다.');
}

// 테이블에 있는 도서목록을 읽어서 배열로 반환하는 함수
function getBookList(){
  // 테이블
  const table = document.getElementById('book-list-tbody')
  // 테이블 아래 행들
  const trs = table.getElementsByTagName('tr')
  // 도서 목록을 저장할 배열
  const books = [];

  // 각 행에 있는 데이터를 파싱하여 배열에 추가
  for(const tr of trs){
    // 행 안에 셀 꺼내기
    const tds = tr.getElementsByTagName('td');
    // 데이터를 파싱하여 도서정보를 생성
    const book = {
      no: tds[0].textContent, // 도서번호
      category: tds[1].textContent, // 카테고리
      bookname: tds[2].textContent, // 도서명
      bookprice: tds[3].textContent // 가격
    }
    // 생성한 객체를 배열에 추가
    books.push(book);
  }
  // console.log(books);
  // 도서 목록을 담은 배열 반환
  return books;
}

// 도서목록을 가격을 기준으로 정렬하는 함수
function sortBookList(){
  // 선택한 정렬 방식 가져오기
  const select = document.getElementById('sort-select');
  const sortType = select.value;  
  console.log('선택한 정렬 방식: ', sortType);

  // 도서 목록 조회
  const books = getBookList();

  // 오름차순 정렬 또는 내림차순 정렬
  if(sortType == "ascending"){
    books.sort((book1, book2)=>{
      const bookPrice1 = parseInt(book1.bookprice); // 숫자부분만 number로 변환
      const bookPrice2 = parseInt(book2.bookprice);
      // console.log(bookPrice1, bookPrice2); // '원'이 붙어있어서 string값임
      return bookPrice1 - bookPrice2; 
    });
  } else if(sortType == "descending"){
    books.sort((book1, book2)=>{
      const bookPrice1 = parseInt(book1.bookprice);
      const bookPrice2 = parseInt(book2.bookprice);
      return bookPrice2 - bookPrice1; 
    });
  }

  // 결과 확인
  console.log(books);

  // 정렬된 데이터를 사용해서 테이블 다시 그리기
  showBookList(books);
}

// 테이블을 다시 그리는 함수
// 매개변수: 배열 목록을 담은 배열
function showBookList(list){
  // 테이블
  const tableBody = document.getElementById("book-list-tbody");
  // 테이블 초기화
  // tbody 태그 안에 html 코드 모두 삭제
  tableBody.innerHTML = '';
  // 전달받은 배열로 테이블 다시 그리기
  for(const book of list){
    const newTr = document.createElement('tr');
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
    newRemove.appendChild(btn);
    btn.addEventListener('click',()=>{
      newTr.remove();
    });
    newTr.appendChild(newBookno);
    newTr.appendChild(newCategory);
    newTr.appendChild(newBookName);
    newTr.appendChild(newBookPrice);
    newTr.appendChild(newRemove);
    const tableBody = document.getElementById("book-list-tbody");
    tableBody.appendChild(newTr);
  }
}

// 도서를 검색하는 함수
function searchBook(){
  // 검색 필드
  const searchInput = document.getElementById("search-input");
  const search = searchInput.value;

  // 입력된 값이 없으면 함수를 종료
  if(search == ''){
    alert("입력된 검색어가 없습니다.");
    return;
  }

  // 도서 목록 조회
  const books = getBookList();

  // 도서목록에 특정 도서가 있는지 확인
  const filteredList = books.filter((book)=>{
    // 정규표현식 생성
    const regex = new RegExp(search);
    // 책 제목에 해당 키워드가 포함되어있는지 확인
    return regex.test(book.bookname);
  });

  // 필터링된 도서목록으로 테이블 다시 그리기
  showBookList(filteredList);
}