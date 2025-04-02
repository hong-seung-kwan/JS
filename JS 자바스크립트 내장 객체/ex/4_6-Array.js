// 배열의 요소 중에서 20보다 큰 숫자 찾기
// 그리고 각 요소에 2를 곱해서 새로운 배열 만들기

// 원본
const arr = [10, 15, 20, 25, 30];

const newArr = arr.filter((value) => {
  return value >= 20;
});

const newArr2 = newArr.map((value) => {
  return value *2;
});
console.log(newArr2);

const result = arr
  .filter((value)=>{
  return value >= 20;
  })
  .map((value)=>{
    return value * 2;
  });
console.log(result);