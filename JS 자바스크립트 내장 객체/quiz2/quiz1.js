// Q1
let str1 = 'aaabc';
console.log(str1.split('a').length-1);

//Q2
let message = "저 친구는 나쁜 친구야. 정말 더러운 사람 같아";
// 금지어 목록
const arr1 = ['나쁜', '더러운'];
// 금지어 포함되어 있는지 확인
for(let word of arr1){
  // 메세지에 금지어가 포함되어 있으면 교체
  if(message.includes(word)){
    message = message.replace(word, 'X'.repeat(word.length));
  }
}
console.log(message);

// Q3
// boolean은 형변환 필요없이 그냥 더하기 가능
const arr = [1,"aa",true,"5",10];
let sum = 0;

for(let num of arr) {
  // console.log(num, typeof num);
  const type = typeof num;
  if(type == 'number' || type == 'boolean'){
    sum = sum + num;
  } else if(type == 'string' && isNaN(num) == false){
    sum = sum + parseInt(num);
  }
}
console.log(sum);

let sum2 = 0;
for(let num of arr) {
  // console.log(num, typeof num);
  const type = typeof num;
  if(type == 'number' || type == 'boolean'){
    sum2 = sum2 + num;
  } else if(isNaN(num) == false){
    sum2 = sum2 + parseInt(num);
  }
}
console.log(sum2);
