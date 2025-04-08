// fetch:XMLHttpRequest 기능과 비슷
// API를 호출할때 사용하는 함수
// XMLHttpRequest보다 코드가 더 간결함

// API 호출시 서버의 주소와 메소드 방식을 설정

// 서버 프로그램 주소 (API)
// 게시물 데이터를 요청한 후에 응답받은 데이터를 조회
fetch('http://192.168.1.9:8080/board/read?no=1')
  .then((response) => {
    // 응답메시지에서 바디데이터만 꺼내서
    // string->object 변환
    return response.json();
  })
  .then((json) => {
    // 변환된 object를 출력
    console.log(json);
  });

// fetch 함수는 promise 객체를 내부에 포함하고 있음
// 그래서 fetch함수를 사용한 후에 바로 then과 catch를 쓸수 있음

// XMLHttpRequest + Promise 조합은 옛날방식
// => fetch 함수로 대체

// API의 종류
// 데이터 조회(GET), 추가(POST), 수정(PUT), 삭제(DELETE)

// POST - 새로운 데이터 추가
// 데이터 추가는 더많은 인자가 필요
// API 주소, 객체
// JSON.stringify() : object -> string
// 왜? 외부 프로그램에서는 자바스크립트의 객체를 이해할 수 없음
// 따라서 공통포맷 (json 또는 xml형식)으로 데이터를 전송해야함

// 게시물 데이터
const board = {
  title: '가입인사입니다',
  content: '안녕하세요',
  writer: '홍승관'
}

// fetch는 API를 호출하고 promise 객체를 반환
fetch('http://192.168.1.9:8080/board/register',
  {
    method: 'POST', // 메소드 종류
    body: JSON.stringify(board), // 전송할 데이터
    // 전송할 데이터의 형식(JSON XML TEXT FORM)
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  }
)
  .then((reponse) => {
    // 응답데이터가 json이 아니고 간단한 텍스트일때
    return reponse.text();
  })
  .then((text) => {
    console.log(text);
  });


// 게시물 수정
// 인자: API주소, 객체
// method: 요청(GET POST PUT DELETE 중에서 선택)
// body: 전송할 데이터 (수정할 게시물 정보)
// header: 메타데이터 (예: 바디데이터의 종류 등)

const modifyBoard = {
  no: 2,
  title: '가입인사입니다',
  content: '수정완료',
  writer: '홍승관'
}

fetch('http://192.168.1.9:8080/board/modify', {
  method: 'PUT',
  body: JSON.stringify(modifyBoard), // object->string
  headers: {
    'content-type': 'application/json; charset=utf-8'
  }
})
  .then((response) => {
    // 2xx: 요청 성공 코드
    // 204: 요청에 성공했지만 반환할 데이터는 없음
    // 왜? 데이터 요청시에는 데이터가 반환됨
    // 데이터 수정 또는 삭제에는 데이터만 처리하고 반환할 데이터 없음
    console.log(response.status);
  })


// 게시물 삭제
// 인자: API 주소, 객체
fetch('http://192.168.1.9:8080/board/remove?no=2', {
  method: 'DELETE'
})
  .then((response)=>{
    console.log(response.status) // 204
  })

// crud

