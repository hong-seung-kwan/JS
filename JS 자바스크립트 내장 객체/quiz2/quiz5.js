// Q11
const visits = [
  { name: "김철수", date: "2024-08-20", purpose: "회의"},
  { name: "이영희", date: "2024-08-18", purpose: "상담"},
  { name: "박지훈", date: "2024-08-21", purpose: "회의"},
  { name: "최유리", date: "2024-08-19", purpose: "교육"},
  { name: "정민호", date: "2024-08-17", purpose: "상담"},
]


// 날짜 기준 오름차순
visits.sort((a,b)=>{
  return new Date(a.date) - new Date(b.date);
});
console.log(visits);

// 목적이 회의인 기록만 필터링

const newList = visits.filter((value)=>{
  return value.purpose == '회의';
});
console.log(newList);

const result = newList.map((value)=>{
  const date = new Date(value.date);
  return {
  name : value.name,
  year : date.getFullYear(),
  month : date.getMonth()+1,
  day : date.getDate(),
  purpose : value.purpose
  }
});
console.log(result);