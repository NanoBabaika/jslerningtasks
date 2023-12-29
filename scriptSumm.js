let button = document.querySelector('.alert__button');

button.addEventListener('click', function(){
   return  alert("Ты че натворил!!?!? А ну быстро закрой!");
})


// Блок сложения двух чисел
let getValueA = document.getElementById("1").value;
let a = getValueA.value;
let getValueB = document.getElementById("2").value;
let b = getValueB.value;
const resultButton = document.querySelector('#resultButton');
 

resultButton.addEventListener('click', function(){
   let result = a + b;
    alert(result);
})
 