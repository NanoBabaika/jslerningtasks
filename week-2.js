 
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
//  isAllTrue([1, 2, 3, 4, 5], n => n < 10) // вернет true (потому что все элементы массива меньше 10)
//  isAllTrue([100, 2, 3, 4, 5], n => n < 10) // вернет false (потому что как минимум первый элемент больше 10)