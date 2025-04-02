// Q7
const students = [
  { name: "김철수", score: 85, gradeLevel: "1학년" },
  { name: "이영희", score: 92, gradeLevel: "2학년" },
  { name: "박지훈", score: 76, gradeLevel: "3학년" },
  { name: "최유리", score: 88, gradeLevel: "1학년" },
  { name: "정민호", score: 54, gradeLevel: "1학년" },
  { name: "한서연", score: 63, gradeLevel: "2학년" },
  { name: "장동건", score: 71, gradeLevel: "3학년" },
  { name: "오지호", score: 80, gradeLevel: "3학년" },
]



// 성적에 따라 학생 등급 90 이상 A 70 이상 B 나머지 C
const result = students.filter((value) => {
  return value.score >= 90;
}).map((value) => {
  value.grade = 'A';
  return value
})
console.log(result);



// Q8
const inventory = [
  { product: "감자칩", quantity: 10, price: 1500 },
  { product: "아이스크림", quantity: 0, price: 3000 },
  { product: "쿠키", quantity: 20, price: 2000 },
  { product: "탄산음료", quantity: 5, price: 1000 },
];

// 제품 "바나나킥" 추가 수량: 50, 가격:1000

inventory.push({ product: "바나나킥", quantity: 50, price: 1000 });
console.log(inventory);


// 재고가 있는 제품의 이름을 변경
const newInventory = inventory.map((value) => {

  if (value.quantity > 0) {
    value.product = '(재고있음)' + value.product;
  }
  return value;
});
console.log(newInventory);

// 재고가 10개가 넘는 제품은 가격의 10% 할인
const discount = newInventory.map((value)=>{
  if(value.quantity > 10){
    value.price = value.price * 0.9;
  }
  return value;

});
console.log(discount);

const result2 = discount.reduce((preValue, curValue)=> {
  return preValue + (curValue.quantity*curValue.price);
},0);
console.log(result2);