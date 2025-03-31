// 변수 선언 키둬드: let, const, var

// 변수가 선언되기 전에 변수를 사용하여 에러남
// console.log(puppy);
let puppy = "cute";

// 변수가 선언되기 전에 사용했지만 에러가 안남
// => 잘못된 현상
console.log(puppy2);
var puppy2 = "cute";

// var 키워드는 호이스팅(변수를 끌어올려서 사용하는 현상)이
// 발생되기 때문에 사용을 권장하지 않는다

// 키워드가 만들어진 순서: var -> let