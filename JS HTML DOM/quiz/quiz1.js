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
