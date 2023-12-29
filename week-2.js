 
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
