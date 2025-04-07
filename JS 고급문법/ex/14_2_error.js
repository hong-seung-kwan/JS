// 예외 처리

// try-catch 또는 try-catch-finally
try {
  // 에러가 발생할 가능성이 있는 코드를 작성
  // func();
} catch (error) {
  console.log(error)
} finally {
  // 에러가 발생됬을때 실행됨
  // 에러가 발생되지 않아도 실행됨
  console.log('에러 발생 여부와 상관없이 실행되는 블록')
}
 

// 에러가 발생하면 프로그램이 비정상적으로 종료됨
// 예외처리를 하면 오류가 발생해도 프로그램이 끝까지 실행됨
console.log('프로그램이 정상적으로 종료되었습니다')
