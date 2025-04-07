// Q20
const Q20= {
  brand: 'apple',
  price: 990000,
  model: 'iPhone 13'
};

// 핸드폰 정보 중에 브랜드와 가격 추출
// 객체의 정보를 각 변수에 나누어 저장
const {brand, price} = Q20;
console.log(brand);
console.log(price);

// Q21
const Q21 = {
  brand : 'Tesla',
  model : 'Model S',
  color : 'Red'
};

function func(brand,model){
  console.log(`자동차 브랜드:${brand}, 모델명${model}`);
}
func(Q21.brand,Q21.model);

// Q22
const colors = ['red','green','blue'];
// 배열의 첫번째 요소를 color1에 저장
// 배열의 요소를 변수에 순차적으로 저장
const [color1,color2,color3] = colors;
console.log(color1,color2,color3);

// Q23
const fruits = ['사과','바나나','오렌지','키위'];
const [fruit1, , , fruit2] = fruits;
console.log(fruit1,fruit2);

// Q24
const fruits2 = ['사과','바나나','오렌지','키위'];
function func2([ch1, ,ch3]){
  console.log(`${ch1}와 ${ch3}`);
}
func2(fruits2);