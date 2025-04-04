// 객체 복사하기 (얕은 복사, 완벽한 복사가 아님)
const obj = { name: '짱구', age: 5 };
const copyObj = obj;

// console.log(obj);
// console.log(copyObj);

// 복사한 object로 값 변경
// copyObj.age = 6;

// console.log(obj);
// console.log(copyObj);
// copy한 object를 수정했더니, 원본데이터 함께 변경됨..
// object는 참조변수로 주소를 저장한다

// 스프래드 연산자를 사용하여 객체를 완벽히 복사하기
// 객체의 프로퍼티를 분해하여 새로운 객체를 생성
// const copyObj2 = {...obj};
// console.log(obj);
// console.log(copyObj2);

// 복사한 객체로 값 변경하기
// copyObj2.age = 6;
// console.log(obj);
// console.log(copyObj2);
// 복사한 객체로 값을 변경해도, 원본데이터에는 영향이 없다
// 복사한 객체는 완벽히 새로운 객체로 생성이 됬다

// 스프래드 연산자를 사용하여 객체 복사하기

// 더 복잡한 구조의 객체 만들기
const object = {
  name: '짱구',
  age : 5,
  favoriteFood: {
    first: '초코비',
    second: '초밥',
  }
};

// 객체 복사하기
// 스프레드 연산자로 객체를 분해하여 새로운 객체를 생성
const copyObject = { ...object};

// console.log(object);
// console.log(copyObject);

// 복사한 객체로 값 변경하기
// copyObject.age = 6;
// copyObject.favoriteFood.first = '돈까스';
// console.log(object);
// console.log(copyObject);

// 복사한 객체를 수정했더니 원본데이터도 함께 수정됨
// 완벽하게 복사가 안됨
// object안에 favoriteFood도 참조 타입이므로, 주소가 복사됨

// 여러 프로퍼티가 참조변수일때는, 스프레드 연산자로 해결하기 어려움

// JSON객체를 사용하여 객체를 복사하기
// object -> json형식의 string
const str = JSON.stringify(object);

console.log(object,typeof object);
console.log(str, typeof str);

// 다시 string -> object로 변환
const cobject = JSON.parse(str);

console.log(object,typeof object);
console.log(cobject,typeof cobject);

// 복사한 객체로 값 변경
cobject.favoriteFood.first = '햄버거';
console.log(object,typeof object);
console.log(cobject,typeof cobject);

// 복사한 객체로 값을 바꿔도 원본데이터에는 영향이 없음
// 따라서 복잡한 객체를 복사할때는 json객체를 사용할 것