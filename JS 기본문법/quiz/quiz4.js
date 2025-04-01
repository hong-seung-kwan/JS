// q4-1
const x = 11;
if(x > 10 && x < 20) {
  console.log(x);
}

// q4-2
const str = "문자열입니다"
if(str.length > 5) {
  console.log(str);
}

// q4-3
const person = {
  age : 15,
  gender : 'M',
  name: '둘리',
  address: '서울', 
};
if(person.age < 20 && person.gender == 'M') {
  console.log("남학생입니다")
}

const arr = [10, 12, 8, 130, 44];
if(arr.includes(10)) {
  console.log("배열에 10이 있습니다")
} else {
  console.log("배열에 10이 없습니다")
}