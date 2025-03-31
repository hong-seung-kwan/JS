// 반복문: for
// 1~10 출력
// 초기화; 조건식; 증감식;
// for(let i = 1; i<=10; i++) {
//   console.log(i);
// }

// 배열 생성
let arr = ["애플", "구글", "페이스북", "아마존", "삼성"];

//배열 안에 있는 요소들을 하나씩 꺼내기
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// for문을 이용해서 배열 출력
// i의 용도: 반복횟수, index
for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

// 반복문을 이용해서 자판기에서 음료를 구매하는 프로그램 작성

// 음료수 목록 => 배열
// 음료수 정보 => 객체
let productList = [
  {name: '솔의눈', price: 700},
  {name: '커피', price: 700},
  {name: '파워에이드', price: 1200},
  {name: '오렌지', price: 1000},
  {name: '보리차', price: 1200},
  {name: '밀키스', price: 800}
];
// 자판기에 800원을 넣고 구매할 수 있는 음료 찾기
let inputCoin = 800;
let outputList = [];

for(let i = 0; i <productList.length; i++) {
  if(productList[i].price <= inputCoin){
    outputList.push(productList[i]);
    console.log(productList[i]);
  }
}