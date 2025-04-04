// Q5
const add1 = function (a, b) {
  return a + b;
};

const add2 = (a, b) => a + b;

add2(2,3);

// Q6
const greet1 = function () {
  return "Hello, World!";
};

const greet2 = () => "Hello, World1";


// Q7

const logSum1 = function (a, b) {
  console.log(a + b);
};

const logSum2 = (a,b) => console.log(a+b);

logSum2(2,3);

// Q8

const multiplyAndAdd1 = function(a, b, c) {
  const temp = a * b;
  const result = temp + c;
  return result;
};

const multiplayAndAdd2 = (a,b,c) => {
  const temp = a * b;
  const result = temp + c;
  return result;
}
multiplayAndAdd2(1,2,3);

//Q9

const numbers = [1,2,3,4,5];
const doubled = numbers.map(function(number){
  return number * 2;
});

const doubled2 = numbers.map((number) => {
  return number * 2;
});

console.log(doubled2);

// Q10
const arr = [1,2,3,4,5,6,7,8,9,10];
const eventNumvers = arr.filter(function(number){
  return number % 2 == 0;
});

const eventNumvers2 = arr.filter((number)=>{
  return number % 2 == 0;
});

console.log(eventNumvers2)