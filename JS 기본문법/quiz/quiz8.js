// Q8
const fun1 = function (x, y) {
  console.log(x - y);
}
fun1(5, 3);
// 풀이
const substract = function (x, y) {
  return x - y;
}
const results = substract(5, 3);
console.log(results);
// Q9
const fun2 = function (x, y) {
  // 3, 5 -> 3 + 4 + 5
  let sum = 0;
  for (let i = x; i <= y; i++) {
    sum = sum + i;
  }
  return sum;
}

let result = fun2(3, 5);
console.log(result);

// Q10
const fun3 = function (arr) {
  max1 = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max1 < arr[i]) {
      max1 = arr[i];
    }
  }
  return max1;
}
let result2 = fun3([-1, 5, 10, -3]);
console.log(result2);
// 풀이
// 숫자 배열 입력 받아 가장 큰값을 구하는 함수
// 매개변수: 배열 , 리턴값: 가장 큰값
// const findMax = function (arr) {
//   let max2 = arr[0];
//   for (const value of arr) {
//     if (value > max2) {
//       max2 = value;
//     }    
//   }
//   return max2;
// }
// const array = [-1, 5, 10, -3,20];
// const results2 = findMax(array);
// console.log(results2);

// Q11
const fun4 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
      return true;
    } else {
      return false;
    }
  }
}
let result3 = fun4(['a', 'b', 'c']);
console.log(result3);

// Q12
const fun5 = function (arr, x) {
  if (arr.includes(x)) {
    return true;
  } else {
    return false;
  }
}
let result4 = fun5(["apple", "banana", "cherry"], "banana");
console.log(result4);

// Q13
const fun6 = function (x) {
  for (let i = 1; i <= 9; i++) {
    console.log(x + '*' + i + '=' + x * i);
  }
}
let result5 = fun6(2);
console.log(result5);

// Q14
const fun7 = function (arr) {
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'string') {
      arr1.push(arr[i]);
    }
  }
  return arr1
}
let result6 = fun7([1, "apple", true, "banana", 42, "cherry"]);
console.log(result6);

// 풀이
// const array = [1,"apple",true,"banana",42,"cherry"]

// const newArray = [];

// 배열을 순회하면서 string 타입의 요소 찾기
// for(const value of array) {
//   const type = typeof value;
//   console.log(value, type);

//   if(type == 'string'){
//     newArray.push(value);
//   }
// }
// console.log(newArray);

// Q15
const fun8 = function (x) {
  let fact = 1;
  for (let i = 1; i <= x; i++) {
    fact = fact * i;
  }
  return fact;
}
let result7 = fun8(5);
console.log(result7);

// Q16

const fun9 = function (students, x) {
  let subjsum = 0;
  for (const student of students) {
    subjsum = subjsum + student[x];
  }
  return subjsum / students.length;
}
const students = [
  { name: "둘리", math: 100, english: 85 },
  { name: "또치", math: 100, english: 95 },
  { name: "도우너", math:100, english: 75 },
];
let result8 = fun9(students, 'math');
console.log(result8);

// 풀이
// 학생 배열을 입력받가 특정 과목의 평균 점수 구하는 함수
// 매개변수: 학생배열 리턴값: 특정 과목의 평균점수
const calcScore = function(arr, subject) {
  let total = 0;
  // 배열 안에 있는 학생 정보 하나씩 꺼내기
  // 1. object.key
  // 2. object["key"]
  for(const student of arr){
    total = total + student[subject];
    // console.log(student[subject]);
    // 학생정보에서 수학점수만 꺼내기
  }
  return total / students.length;
}
const students2 = [
  { name: "둘리", math: 90, english: 85 },
  { name: "또치", math: 80, english: 95 },
  { name: "도우너", math: 70, english: 75 },
];

const avg = calcScore(students2,'math');
console.log(avg);

// Q17
const fun10 = function(employees,position) {
  let sum10 = 0;
  let count = 0;
  for(const employee of employees){
    if(employee.position === position){
      sum10 = sum10 + employee.salary;
      count++;
    }
  }
  return sum10 / count;
}
const employees = [
  {name: "짱구", position:"부장", salary: 500},
  {name: "철수", position:"차장", salary: 380},
  {name: "훈이", position:"사원", salary: 260},
  {name: "맹구", position:"차장", salary: 420},
  {name: "유리", position:"사원", salary: 220},
];
let result9 = fun10(employees,'사원');
console.log(result9);