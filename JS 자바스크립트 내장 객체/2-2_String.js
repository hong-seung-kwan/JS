// 사용자 이메일의 도메인 추출하기

const email = 'user@naver.com';

// 구분자: @
const arr = email.split('@');
console.log(arr); // 배열 ['user', 'naver.com']

// 반환받은 배열에서 도메인만 꺼내기
console.log(arr[1]);

// 파일의 확장자 확인하기

// 확장자 목록
const allowedExtensions = ['.jpg', '.png'];

// 해당 파일이 이미지인지 확인
const fileName = '사과.png';

// 확장자만 추출하는 방법: split slice substring

// 확장자만 추출
// 먼저 점의 위치를 확인
const index = fileName.lastIndexOf('.');
console.log(index);
const extension = fileName.slice(2);
console.log(extension); // .png

// 해당 파일이 .jpg 또는 .png인지 확인
if(allowedExtensions.includes(extension)) {
  console.log('해당 파일은 이미지입니다!');
} else {
  console.log('해당 파일은 이미지가 아닙니다..');
}