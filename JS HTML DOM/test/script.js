// box에 배경색 설정
// const box = document.getElementById('box');
// box.style.background = 'yellow';

// HTML 문서가 완전히 생성되기 전에 스크립트를 실행하면
// 아직 div가 생성되지 않았기 때문에 null이 반환

function onClick() {
  const box = document.getElementById('box');
  box.style.background = 'yellow';
}

// 이벤트가 발생됬을때 dom을 조작하는 것은 아무 문제가 없음
// 이미 html 문서가 완성이 됬기 때문에