//  q5-1
for(let i = 1; i <= 10; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}

// q5-2
for(let i = 10; i >= 1; i--) {
  if(i % 2 == 1){
    console.log(i);
  }
}

// q5-3
let sum = 0;
for(let i = 1; i<=10; i++){
  sum = sum + i;
}
console.log(sum);

// q5-4
let sum2 = 0;
for(let i = 1; i <= 20; i++){
  if(i % 3 == 0 || i % 5 == 0){
    sum2 = sum2 + i;
  } 
}
console.log(sum2);