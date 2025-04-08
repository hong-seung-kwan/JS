// Q25
const str = 'I have 2 apples and 3 oranges.';
const regex = /\d/g;
console.log(str.match(regex));

// Q26
const str2 = 'Hello JavaScript is fun!';
const regex2 = /[aeiou]/g;
console.log(str2.match(regex2));

// Q27
const str3 = 'Welcome to the world of coding!';
const regex3 = /coding/;
console.log(regex3.test(str3));

// Q28
const str4 = 'JavaScript is powerful'
const regex4 = /is/;
const result = regex4.exec(str4); 
console.log(result.index);

// Q29
const str5 = 'baanaaana';
const regex5 = /a+/g;
console.log(str5.match(regex5));

// Q30
const str6 = 'abc123ABC';
const regex6 = /abc/gi;
console.log(str6.match(regex6));

// Q31
const str7 = 'Hello, World! How are you today?';
const regex7 = /[A-Z]/g;
console.log(str7.match(regex7));
