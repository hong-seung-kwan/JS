//Q14
const students = new Map();

students.set('김민준' ,{grade:'2학년', major: '컴퓨터공학'});
students.set('이서윤' ,{grade:'3학년', major: '경영학'});
students.set('박지호' ,{grade:'1학년', major: '물리학'});
students.set('최지민' ,{grade:'4학년', major: '화학'});
students.set('정예린' ,{grade:'2학년', major: '수학'});
students.set('한지우' ,{grade:'3학년', major: '영어영문학'});

for(const student of students){
  console.log(students.keys.includes(key,'3학년'));
}
