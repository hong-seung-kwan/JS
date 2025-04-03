// set을 활용하여 영화 시청 기록을 관리하는 프로그램 만들기

// set 생성 (시청한 영화목록)
const watchMovies = new Set();

// 데이터 추가
watchMovies.add('인셉션');
watchMovies.add('매트릭스');
watchMovies.add('인터스텔라');

console.log(watchMovies);

// 보고 싶은 영화 목록
// set을 생성하면서 목록을 초기화
const toWatchMovies = new Set(['파이트 클럽', '더 울프 오브 월스트리트', '노인을 위한 나라는 없다']);

console.log(toWatchMovies);

// 새로운 영화를 시청
// 기존 목록에 영화가 있는지 확인하고, 없으면 추가
const isWatched = watchMovies.has('파이트클럽');

if (!isWatched) {
  watchMovies.add('파이트클럽');

}

console.log('시청한 영화 목록: ', watchMovies);

// 해당 영화가 보고싶은 영화 목록에 있다면 삭제

const movieName = '파이트 클럽';

if (toWatchMovies.has('파이트클럽')) {
  toWatchMovies.delete('파이트클럽');
  console.log(`${movieName}을 보고싶은 영화 목록에서 삭제했습니다!`)
}

console.log('보고싶은 영화 목록: ', toWatchMovies);

console.log('시청한 영화 목록:');

for(const movie of watchMovies){
  console.log(movie);
}

console.log('보고싶은 영화 목록:')
for(const movie of toWatchMovies){
  console.log(movie);
}