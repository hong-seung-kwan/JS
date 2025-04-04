// 단어를 여러개 입력 받아서 하나의 문장으로 만드는 함수
// rest 파라미터: 함수의 나머지 파라미터
// 전달받은 인자를 배열로 수집

// 첫번쨰 인자는 별도의 매개변수로 선언
// 그리고 나머지 인자는 rest 파라미터로 수집
function func(a,...words) {
  console.log(a, words);
  // 배열의 join 함수 사용
  const text = words.join(" "); // 구분자는 공백
  // console.log(text);
  const str1 = `${a}~~~`;
  console.log(str1, text);
}

// func('hello!','this','is','javascript');
// 예상결과: hello! this is javascript

func('hi','this','is','html');
// 첫번쨰 텍스트에 ~~~ 물결표시
// 예상결과: hi~~~ this is html