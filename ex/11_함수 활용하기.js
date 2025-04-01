// 매출의 부가세 계산

let price1 = 100000; // 매출
let vat1 = 0.1 // 부가세 10%
let tax1 = price1 * vat1; // 부가세 계산
console.log(tax1);

let price2 = 240000; // 매출
let vat2 = 0.1;
let tax2 = price2 * vat2; // 부가세
console.log(tax2);

// 코드 중복
const calc = function(price) {
  let vat = 0.1
  let tax = price * vat;
  console.log(tax)
}
calc(200000);