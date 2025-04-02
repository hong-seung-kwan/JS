// 상품 관리 프로그램 구현하기
// 상품 목록
const products = [
  { name: "스마트폰", price: 799000, category: "전자제품"},
  { name: "노트북", price: 1200000, category: "전자제품"},
  { name: "헤드폰", price: 150000, category: "전자제품"},
  { name: "키보드", price: 100000, category: "액세서리"},
  { name: "마우스", price: 50000, category: "액세서리"},
  { name: "충전기", price: 30000, category: "액세서리"},
  { name: "블루투스 스피커", price: 90000, category: "전자제품"}
];

// 상품의 가격을 기준으로 오름차순 정렬
// 오름차순: 작은 -> 큰
// 함수 리턴값: 숫자
// sort함수의 규칙: 양수가 반환되면 위치를 교체
products.sort((a,b)=>{
  return a.price - b.price;
});

console.log(products);

// 가격이 5 ~ 50만원 사이이고,
// 카테고리가 '전자제품'인 상품 찾기

// 1. 물건의 가격이 5만원 이상
// 2. 물건의 가격이 50만원 이하
// 3. 물건의 카테고리가 전자제품

// 함수의 매개변수: value, index, array
// 함수의 리턴값: boolean
// 결과가 true면 요소를 유지, false면 제거
const result = products.filter((obj)=>{
  return obj.price >= 50000 && obj.price <= 500000 && obj.category == '전자제품'
});
console.log(result);

// 상품 가격에 형식 표시하기
// 10000 => 10000원
// 상품가격만 교체
const result2 = products.map((value)=>{
  console.log('변환 전: ' ,value);
  value.price = value.price + '원'
  console.log('변환 후: ' ,value);
  return value;
});
console.log(result2);

const result3 = products.map((value)=>{
  value.price = `${value.price}원`;
  return value;
});
console.log(result3);