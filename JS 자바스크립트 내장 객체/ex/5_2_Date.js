// 날짜를 특정패턴으로 출력하기
const now = new Date();
console.log(now);

const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
console.log(year,'-',month+1,'-',date);

// 시간을 특정패턴으로 출력하기
// 15:44:00
const hour = now.getHours();
const min = now.getMinutes();
const second = now.getSeconds();
const time = hour + ':' + min + ':' + second;
console.log(time);

// 날짜 계산
// 오늘부터 10일 후의 날짜 구하기!
const curDate = now.getDate();
now.setDate(curDate + 10);

// 시간에 타임존을 적용 toLocaleString()
console.log(now.toLocaleString());