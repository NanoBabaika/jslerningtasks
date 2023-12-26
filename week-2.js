let summ = (a, b =10) => a + b;

console.log(summ(10));

const arr1 = [1, 2, 3, 4];

function wievMassive (...args) {
    console.log(...args)
}


wievMassive (...arr1);



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


const numbers = [1, 2, 3, 4, 5]; 

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
