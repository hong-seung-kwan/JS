// Q9

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth()+1;
const date = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();
const second = now.getSeconds();

const time = year +'년'+month +'월'+date+'일'+hour+'시'+min+'분'+second+'초'
console.log(time.toLocaleString());


// Q10

const curTime = now.getMinutes();
now.setMinutes(curTime + 90);
console.log(now.toLocaleString());

