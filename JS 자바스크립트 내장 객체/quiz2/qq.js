const arr = [
  { name: "김철수", date: "2024-08-20", purpose: "회의" },
  { name: "이영희", date: "2024-08-18", purpose: "상담" },
  { name: "박지훈", date: "2024-08-21", purpose: "회의" },
  { name: "최유리", date: "2024-08-19", purpose: "교육" },
  { name: "정민호", date: "2024-08-17", purpose: "상담" },
];

// 방문일을 기준으로 정렬
// sort함수는 숫자를 기준으로 정렬됨

// 날짜를 계산할 때, 더 늦은 날짜 - 더 빠른 날짜 = 양수

arr.sort((a, b) => {
  console.log(a.date, b.date, new Date(a.date) - new Date(b.date));
  return new Date(a.date) - new Date(b.date);
});
console.log(arr);

// 방문 목적이 '회의'인 기록만 찾기
// 매개변수: value(object)
// 리턴값: boolean
const filterList = arr.filter((obj) => {
  // console.log(obj.purpose, obj.purpose == '회의');
  return obj.purpose == '회의';
});
console.log(filterList);

// 배열을 새로운 내용으로 변환할때 -> map 함수
// 기존 객체에서 프로퍼티가 제거, 새로운 프로퍼티 추가

// 매개변수: 객체
// 반환값: 새로운값
const mapList = filterList.map((obj) => {
  const visitDate = new Date(obj.date)
  console.log(visitDate, typeof visitDate);
  return {
    name: obj.name,
    purpose: obj.purpose,
    year: visitDate.getFullYear(),
    month: visitDate.getMonth()+1,
    day: visitDate.getDate()
  }
});
console.log(mapList);