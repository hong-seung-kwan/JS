// 서버 프로그램: json server
// 클라이언트 프로그램: js 파일

// 자바스크립트를 사용해여 API를 호출
// fetch 함수를 사용해서 API 호출

// 게시물 목록 조회

async function func() {
  const response = await fetch('http://localhost:3000/boards');
  // 바디에 있는 데이터 꺼내기 > 객체로 변환
  // json() 함수도 비동기 함수
  const body = await response.json();
  console.log(body);
}

func();


// 게시물 단건 조회
// no로 조회
// fetch('http://localhost:3000/boards')
// .then((res)=>{ return res.json() })
// .then((json)=>{ console.log(json) });

// const json = await response.json();

// console.log(json);

// const newBoard = {
//   id: '2',
//   title: '2번글',
//   writer: '또치'
// }

// 추가
// 인자: API주소, 객체
// fetch('http://localhost:3000/boards',{
//   method: 'POST', // 요청 메소드
//   body: JSON.stringify(newBoard), // 전송할 데이터
//   headers: {'content-type': 'application/json; charset=UTF-8' }
// })
// .then((response)=>{
//   return response.text();
// })
// .then((text)=> {
//   console.log(text);
// });

// API를 호출 한 후에 응답받은 메세지
// 메세지에서 바디데이터 꺼내기
// text() -> 문자열 그대로 추출
// json() -> 객체로 변환해서 추출




// 게시물 수정

// 교체할 게시물 정보

// const board = {
//   id: '2',
//   title: '게시물 수정 완료',
//   writer: '또치'
// }

// // // // API주소, 객체
// fetch('http://localhost:3000/boards/2',{
//   method: 'PUT',
//   body: JSON.stringify(board),
//   headers: {'content-type': 'application/json; charset=UTF-8' }
// })
// .then((response)=> {
//   console.log(response.status);
// });

// async function fun2() {
//   const response = await fetch('http://localhost:3000/boards/2', {
//     method: 'PUT',
//     body: JSON.stringify(board),
//     headers: { 'content-type': 'application/json; charset=UTF-8' }
//   })

//   const result = await response.text();

//   console.log(result);
// }


// 게시물 삭제
// async function func3() {
//   const response = await fetch('http://localhost:3000/boards/1', {
//     method: 'DELETE'
//   });

//   const result = await response.text();

//   console.log(result);
// }
// func3();

// 댓글 목록 조회

async function func4() {
  const response = await fetch('http://localhost:3000/comments');

  const comments = await response.json();

  // console의 table 함수를 사용하여 목록을 출력
  // log함수와 기능은 같지만 표형식으로 출력됨
  console.table(comments);

}

func4();