const storeName = document.querySelector('#storeName');
const foodMeal = document.querySelector('#foodMeal');
const foodCommet = document.querySelector('#foodCommet');
const foodPrice = document.querySelector('#foodPrice');
const userAnswer = document.querySelector('#userAnswer');
const userAnswerGroup = document.querySelector('#userAnswerGroup');



//----------->>>  連接  <<<-----------

// 第一題 --> 新增 店家的 (城市,店名,店家評價)
export function addMeal(){

    let body ={
      "mealName" : storeName.value,
      "mealFood" : foodMeal.value,
      "mealPrice" : foodCommet.value,
      "mealComment" : foodPrice.value,

    }
  
    fetch('http://localhost:8080/api/add_meal',{
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body:JSON.stringify(body)
    })
    .then(function(res){  
      return res.json();
    })
    .then(function(data){
        let { message, store } = data

        if (message != null) {
           console.log(message);
           alert(message)
        }
      userAnswer.innerHTML=`<h3>Message : ${message}  <br> storeName : ${store.storeName}<br> storeCity : ${store.storeCity} <br>storeComment: (預設) ${store.storeComment} ⭐ </h3>`
      userAnswerGroup.style.display = 'block';
      storeName.value = '';
      foodMeal.value= '';
      foodCommet.value= '';
      foodPrice.value= '';

      console.log(data);
    }) 
    .then(function(err){
      console.log(err);
    })
  
}
