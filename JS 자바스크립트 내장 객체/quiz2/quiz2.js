// Q4
const arr1 = ["apple", "banana", "grape","kiwi","watermelon"];

const quiz1 = arr1.filter((value)=>{
  return value.length > 5;
})
console.log(quiz1);

// Q5
const arr2 = ["apple", "banana", "grape","kiwi","watermelon"];
const quiz2 = arr2.map(function(value){
 return value.toUpperCase();
});
console.log(quiz2);


// Q6
const arr3 = ["apple", "banana", "grape","kiwi","watermelon"];
const quiz3 = arr2.filter((value)=> {
  return value.length > 5;

}).map((value)=>{
  return value.toUpperCase();
});
console.log(quiz3);