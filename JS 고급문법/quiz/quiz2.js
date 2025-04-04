// Q4
// 상품 리스트를 사용하여 가격 계산하는 프로그램
// 상품리스트
const product1 = { name: '새우깡', price: 1500, discount: 10 };
const product2 = { name: '홈런볼', price: 2000, discount: 5 };
const product3 = { name: '포카칩', price: 2500 };
const product4 = { name: '칙촉', price: 3000, discount: 15 };
const product5 = { name: '오잉', price: 1800 };

// 상품 리스트 입력받아 할인율을 적용해서 총 금액 구하는 함수
// 매개변수: 상품 목록
function calcTotalPrice(...products) {
  // console.log(products);

  // 총금액 -> 누적액
  // 매개 변수: total(현재 누적값) value (상품)
  // 결과: 새로운 누적값
  const sum = products.reduce((total, product)=>{
    // 상품 가격 누적, 할인율 있다면 할인율 적용
    // console.log(product.price,product.discount);
    if(product.discount == undefined){
      price = product.price;
    }else{
      price = product.price * (1-product.discount/100);
    }
    console.log(price);
    return  total + price;
  },0)
  console.log('총 금액: ',sum);
  const avg = sum / products.length;
  console.log(`전체 평균 가격은 ${avg}원 입니다.`);
}
calcTotalPrice(product1, product2, product3, product4, product5);