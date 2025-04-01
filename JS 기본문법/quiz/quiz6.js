const arr = [1,'aa', true, 5, 10];

let sum = 0;
for(let i = 0; i< arr.length; i++){
  if(typeof arr[i] == 'number'){
    sum = sum+arr[i];
  }
}
console.log(sum);


// for(let i = 0; i < 5; i++){
//   let type = typeof arr[i];
//   console.log(arr[i], '타입:', type);

//   if(type == 'number'){
//     sum = sum + arr[i];
//   }
// }
// console.log(sum);


