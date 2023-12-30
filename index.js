


// Задача1
let el = ['Aple', 'Pear',  'cherry'];

el.forEach(function (item, i, arr) {
    console.log(i + ": " + item + " (массив:" + arr +")" );
});


// Задача2
const newArray = [2, 4, 9];
 

const newArray2 = newArray.map(el =>{
    return el ** 2
});

console.log(newArray2);


// Задача3
let numbers =[1, 2, 3];

let sum = numbers.reduce(function (sum, elem) {
    return sum + elem;
})

console.log(sum);


// Задача4
let keys = upperProps({ name: 'Сергей', lastName: 'Петров' });
let keys2 = [...args];

console.log(keys2);

keys.forEach(function (item, i, keys) {
    console.log(keys.name);
});
