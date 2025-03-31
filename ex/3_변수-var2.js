// var 키워드로 변수 선언
var puppy = "cute";
{
  var puppy = "so cute";
  
}
console.log(puppy); // so cute
// var 키워드로 만들어진 변수는 블록스코프를 구분할 수 없다

// let 키워드로 변수 선언
let puppy2 = "cute";
{
  let puppy2 = "so cute"; // 지역변수
}
console.log(puppy2);

// var 키워드는 호이스팅, 블록스코프 등 문제가 있기 때문에
// 사용을 권장하지 않는다
// var, let, const