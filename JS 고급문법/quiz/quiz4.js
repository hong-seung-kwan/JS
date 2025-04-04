// Q11
const name = '아리';
const age = 17;
console.log(`${name}의 나이는 ${age} 입니다.`);

// Q12
const a = 10;
const b = 20;
console.log(`${a}과 ${b}을 곱한 결과는 ${a* b} 입니다`);

// Q13
const c = 10;
const d = 20;
console.log(`${c}과 ${d}의 평균은 ${(a+b)/2} 입니다`);

// Q14
const city = '서울';
const population = 9736000;
console.log(`${city}의 인구는 ${population} 명 입니다`);

// Q15
const sname = '소영';
const score = 75;

if (score >= 60){
  console.log(`${sname}의 점수는 ${score}으로 합격입니다`)
}else{
  console.log(`${sname}의 점수는 ${score}으로 불합격입니다`)
}

// Q16
const property = 'address';
const person = {
  name: '철수',
  age : 21
}

person[property] = '인천 남동구 만수동';

console.log('업데이트된 객체:',person);


// Q17
const key1 ='productName';
const key2 ='productPrice';

const product = {}

product[key1] = '필통';
product[key2] = 5000;
console.log('업데이트된 객체:',product);