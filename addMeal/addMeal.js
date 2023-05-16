import{ addMeal } from"../addMeal/connectionAddMeal.js";
const anchorElement = document.getElementById('add-store-title');
// const headerSecindBlockOne = document.querySelector('header-secindBlock-one');
const AddBtn = document.querySelector('#AddBtn');
const btnMsg = document.querySelector('#btnbtnclose');
const userAnswerGroup = document.querySelector('#userAnswerGroup');


userAnswerGroup.style.display='none';

    window.addEventListener('DOMContentLoaded', () => {

            anchorElement.scrollIntoView();

      })


      //----------->>>  動作  <<<-----------

AddBtn.addEventListener('click',function(){
  
    addMeal();
  
  })
  
  btnMsg.addEventListener('click',function(){
  
    userAnswerGroup.style.display='none';
  
  })

