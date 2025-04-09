// 할일 추가
function addTodo() {
  const list = document.getElementById('todo-list');
  // 입력필드  
  const input = document.getElementById('todo-input');
  //console.log(input.value);
  // 사용자가 입력한 값 꺼내기
  const text = input.value;

  if (text == '') {
    alert('사용자가 입력한 내용이 없습니다');
    return;
  }

  // 그렇지 않으면 목록에 추가
  // 새로운 항목 만들기
  const li = document.createElement('li');
  // 구성: 체크박스, 삭제버튼, 수정버튼, 입력필드
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  // 체크박스 이벤트 처리
  // 체크가 되면 완료가 된것처럼 스타일 꾸미기
  checkbox.addEventListener('change', () => {
    // 토글 이벤트 처리
    li.classList.toggle('complete');
    countTodo(); // 체크박스의 상태가 변경되었을때 count 다시 세기
  });
  const textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.value = text; // 입력필드에 꺼낸 값으로 초기화
  textInput.disabled = true; // 수정불가. 읽기모드
  const editBtn = document.createElement('button');
  editBtn.textContent = '수정';

  // 수정기능 (읽기모드 -> 수정모드 전환)
  // 수정버튼을 클릭하면 입력필드가 활성화되고
  // 버튼이 '저장'버튼으로 전환됨

  // 모드에 따라 입력필드와 버튼을 변경
  editBtn.addEventListener('click', () => {
    console.log(editBtn.textContent);
    // 버튼의 이름에 따라 모드를 전환
    if (editBtn.textContent == '수정') { // 편집모드
      textInput.disabled = false;
      editBtn.textContent = '저장';
    } else { // 읽기모드
      textInput.disabled = true;
      editBtn.textContent = '수정';
    }
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '삭제';
  // 삭제버튼을 클릭하면 목록에서 해당 항목이 삭제됨
  removeBtn.addEventListener('click', ()=>{
    li.remove();
    countTodo(); // 요소가 삭제가 됬을때 다시 count 세기
  })
  li.appendChild(checkbox);
  li.appendChild(textInput);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);

  list.appendChild(li);

  // 입력필드 초기화
  input.value = '';

  // todo가 추가됬을때 count 세기
  countTodo();
}

// 모든 todo를 삭제하는 함수
function deleteAll(){
  // ul 태그 안에 있는 모든 li 태그 가져오기
  // quertSelector: css 선택자를 사용해서 html 요소 가져오기
  // quertSelectorAll: 조건을 만족하는 모든 요소 가져오기
  const list = document.querySelectorAll('#todo-list li');
  console.log(list);
  list.forEach((li)=>{
    li.remove();
  });
  countTodo(); // todo가 삭제됬으면 다시 count 세기
}

// todo의 총개수와 완료된 todo의 개수를 세는 함수
// 언제 함수 호출할까?
// 1. todo가 추가되었을때
// 2. todo가 삭제되었을때
// 3. 일괄 삭제가 됬을때
function countTodo(){
  // 총 개수
  const list = document.querySelectorAll('#todo-list li');
  const totalCount = list.length;
  console.log('todo의 총개수: ', totalCount);
  
  // 화면에 총개수 표시
  const span1 = document.getElementById('total-count');
  span1.textContent = totalCount;

  // 완료된 todo 세기
  // li 태그 안에 checkbox를 확인
  // checked라는 속성을 가지고 있는지 확인
  // 속성 선택자를 사용해서 checked를 찾고, 상태 선택자를 사용해서
  // 체크가 되어있는 checkbox 찾기

  const completeCheckbox = document.querySelectorAll('#todo-list li input[type="checkbox"]:checked');
  // console.log('체크가된 체크박스: ', completeCheckbox.length);
  const completeCount = completeCheckbox.length;
  const span2 = document.getElementById('complete-count');
  span2.textContent = completeCount;
  // document.getElementById('complete-count').textContent = completeCount;
}