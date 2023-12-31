 
const arr1 = [1, 2, 3, 4];

function wievMassive (...args) {
    console.log(...args)
}


wievMassive (...arr1);

 
// Задача4
let keys =  ['Сергей', 'Петров'];
console.log(keys);

keys.forEach(function (item, i, keys) {
    let copyKeys = [...keys];
    console.log(copyKeys.map(e => e.toUpperCase()));
  });


  // Задача 5
const numbers = [1, 2, 3, 4, 20];

 numbers.forEach(function(elem){
  if(elem <= 10) {
    // return true;
    console.log(true);
  } else {
    // return false;
    console.log(false);

  }
 })
 
  // Задача 5.2

  