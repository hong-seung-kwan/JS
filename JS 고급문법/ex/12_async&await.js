// async/await: 비동기 작업에 사용하는 키워드

// 함수 정의
// 함수내부에서 await 키워드를 쓰면 함수 앞에 반드시 async를 붙여아함
async function func(){
  // 1번 게시물 조회
  // 응답이 올때까지 기다리지 않고 결과를 사용함

  // await: API 응답이 올때까지 기다리겠다는 의미
  // response: 응답 전체 메시지
  const response = await fetch('http://192.168.1.9:8080/board/read?no=1');
  // http 메시지의 바디에 게시물데이터가 담김 (json형식의 string)
  // body 데이터를 꺼내면서 string->object로 변환
  // 바디데이터를 파싱할때도 await 키워드 추가
  const json = await response.json();
  // response 객체의 json함수도 비동기함수
  console.log(json);

}
func();

// 이전예제를 보면 fetch를 호출한 후에 then 함수를 바로 이어서 사용해야함
// async=await 키워드를 사용하면 then없이 결과를 처리할 수 있음

// fetch함수 + async/await
async function func2() {

  const board = {
    title: '가입인사',
    content: '가입인사입니다~',
    writer: '홍승관'
  }

  // 데이터 추가
  // API 호출하고 응답메시지 받기
  // fetch는 응답이 올때까지 기다렸다가 결과를 받아야함
  const response = await fetch('http://192.168.1.9:8080/board/register',{
    method: 'POST',
    body: JSON.stringify(board), // objetc -> json형식 string
    headers: {'content-type': 'application/json; charset=utf-8'}
  });
  // 응답메시지에서 바디데이터를 꺼낼때 json() text() 함수를 사용
  // json() text() 함수도 비동기 함수
  // 새로운 게시물의 번호 반환
  const newNo = await response.text();

  console.log(newNo);
}
// 16 18 19

