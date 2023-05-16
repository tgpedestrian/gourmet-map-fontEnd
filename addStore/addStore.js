import { addStore } from "../addStore/connectionAddStore.js";

const anchorElement = document.querySelector('#addStoreText');
const AddBtn = document.querySelector('#AddBtn');
const btnMsg = document.querySelector('#btnbtnclose');
const userAnswerGroup = document.querySelector('#userAnswerGroup');
// const bodyClass = document.querySelector('#bodyClass');

userAnswerGroup.style.display='none';


//----------->>>  window readLoad  <<<----e------

window.addEventListener('DOMContentLoaded', () => {
  // 滾動到該元素所在位置
  anchorElement.scrollIntoView();
});



//----------->>>  動作  <<<-----------

AddBtn.addEventListener('click',function(){
  
  addStore();

})

btnMsg.addEventListener('click',function(){

  userAnswerGroup.style.display='none';

})




//----------->>>  連接  <<<-----------

// 第一題 --> 新增 店家的 (城市,店名,店家評價)
// function addTest(){

//   let body ={
//     "storeName" : storeName.value,
//     "storeCity" : cityName.value
//   }

//   fetch('http://localhost:8080/api/add_store',{
//     method:"POST",
//     headers:{
//       "Content-Type" : "application/json",
//     },
//     body:JSON.stringify(body)
//   })
//   .then(function(res){
//     return res.json();
//   })
//   .then(function(data){
//     userAnswer.innerHTML=`<h3>${data.message}</h3>`
//     console.log(data);
//   })
//   .then(function(err){
//     console.log(err);
//   })

// }







  
