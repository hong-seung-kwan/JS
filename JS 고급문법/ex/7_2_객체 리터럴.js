// 객체를 만들 때, 변수 사용하기

const key1 = 'maker';
const key2 = 'model';
const key3 = 'year';

// 자동차 객체 만들기
const car = {
  [key1]: '현대', // ['maker']
  [key2]: '쏘나타',
  [key3]: 2021
}

console.log(car);

// object의 key가 유동적일때 변수를 사용