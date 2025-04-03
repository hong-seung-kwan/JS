const contacts = new Map();

contacts.set('민수',{phone: '010-1234-5678', address:'서울특별시 강남구'});
contacts.set('지영',{phone: '010-8756-4321', address:'부산광역시 해운대구'});
contacts.set('현우', {phone:'010-2345-6789', address:'대구광역시 수성구'});
contacts.set('수빈', {phone:'010-8976-4535', address:'인천광역시 남동구'});
contacts.set('동민',{phone: '010-3456-7890', address:'광주광역시 서구'});
contacts.set('하은', {phone: '010-6543-2109', address: '대전광역시 유성구'});

// 구조 분해를 이용하여 배열의 첫번째 두번쨰 요소 분리
// key - 첫번째 요소 저장
// value - 두번째 요소 저장
for(const [key,value] of contacts){
  console.log(key, value);
}

// 연락처 목록에 "동민"의 연락처가 있는지 확인

console.log(contacts.has("동민"));

if(contacts.has("동민")){
  // 있다면 전화번호 010-9999-9999 로 수정
  // map의 추가와 수정은 set
  // map 안에 '동민'이라는 키가 있다면 수정 처리
  // 없다면 추가 처리
  contacts.set('동민',{phone:'010-9999-9999', address: '광주광역시 서구'});
}
for(const [key,value] of contacts){
  console.log(key, value);
}

// 연락처 중 '지영'의 연락처가 있으면 삭제

const userName = '지영';
if(contacts.has(userName)){
  contacts.delete(userName);
  console.log(`${userName}이 연락처에서 삭제되었습니다`)
}

console.log(contacts);

// 현재 연락처의 개수 확인
// map의 크기 :size
const size = contacts.size;
console.log(`연락처의 개수는 ${size} 입니다.`);