// const student = {
//     name:'Василий',
//     lastName:'Петров'
// }


// const {name:firstName, lastName, age = 22} = student;

// console.log(`${firstName} ${lastName}, (${age})`);


// let summ = (a, b =10) => a + b;

// console.log(summ(10));

const numbers = [1, 2, 3, 4];

function wievMassive (...args) {
    console.log(...args)
}


wievMassive (...numbers);



// Перебор массива
// Задание 1
let arr = [
    "Aple",
    "Pear",
    "Blueberry"
];

arr.forEach(function(item, i, arr) {
    console.log( i + ": " + item + " (массив:" + arr + ")" );
});

