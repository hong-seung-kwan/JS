function changeBorder(){
  const contact = document.getElementById('number')
  const regex = /[0-9]/g;
  console.log(number.value)
  if(regex.test(number.value) == false){
    contact.classList.add('border-red');
    console.log(regex.test(number.value));
  }else{
    contact.classList.remove('border-red');
  }
}

function func2() {
  const text = document.getElementById('texts');
  
  const textCounts = text.value.length;

  const span1 = document.getElementById('textCount');
  span1.textContent = textCounts;

  
  console.log(text.value.length);

  if (text.value.length > 30) {
    text.style.color = 'red';
  } else {
    text.style.color = '';
  }
}

function func3(){
  const name = document.getElementById('name');
  const number = document.getElementById('number');
  const radios = document.querySelector('input[type="radio"]:checked');

  // console.log(radios.value);
  // console.log(name.value);
  // console.log(number.value);

  if(name == ""){
    alert('이름을 입력해주세요');
  } else if(number == ""){
    alert('연락처를 입력해주세요');
  } else{
    alert('접수가 완료되었습니다');
    name.value = '';
  }
}

