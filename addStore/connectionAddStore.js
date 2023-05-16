const storeName = document.querySelector('#storeName');
const cityName = document.querySelector('#cityName');
const userAnswer = document.querySelector('#userAnswer');
const userAnswerGroup = document.querySelector('#userAnswerGroup');



//----------->>>  連接  <<<-----------

// 第一題 --> 新增 店家的 (城市,店名,店家評價)
export function addStore(){

    let body ={
      "storeName" : storeName.value,
      "storeCity" : cityName.value
    }
  
    fetch('http://localhost:8080/api/add_store',{
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
      cityName.value= '';
      console.log(data);
    }) 
    .then(function(err){
      console.log(err);
    })
  
}
