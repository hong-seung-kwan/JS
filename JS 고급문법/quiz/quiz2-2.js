// Q4
const product1 = {name: '새우깡', price: 1500, discount: 10};
const product2 = {name: '홈런볼', price: 2000, discount: 5};
const product3 = {name: '포카칩', price: 2500};
const product4 = {name: '칙촉', price: 3000, discount: 15};
const product5 = {name: '오잉', price: 1800};

function func(...products){
  // console.log(products);
// reduce함수 사용
  const sum = products.reduce((total,value)=>{
    if(value.discount == undefined){
      price = value.price;
    } else{
      price = value.price * (1-value.discount/100);
    }
    return total + price;
  },0)
  console.log((sum/products.length).toFixed(2));
}

func(product1,product2,product3);