 
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
 
  // Задача 6
  // isSomeTrue([1, 2, 30, 4, 5], n => n > 20) // вернет true (потому что в массиве есть хотя бы один элемент больше 20)
  // isSomeTrue([1, 2, 3, 4, 5], n => n > 20) // вернет false (потому что в массиве нет ни одного элемента больше 20)

  // const numbers2= [1, 2, 30, 4, 5];

  


 
 
// Терория
const arr2 = [1, 2, 3, 4, 5]; 

const arr3 = ['new element', 'new element2'];

arr2.splice(3, 0, ...arr3);

console.log(arr2);
 

// копирование массива
const arr4 = [1, 2, 3, 4, 5];

const arr5 = [...arr4];

arr5[2] = 'Hi from arr5!';

console.log(arr4);
console.log(arr5);

// Перебор массива

for ( let i = 0; i<arr5.length; i++) {
  console.log(arr5[i]);
}



const krista = {
  name: 'Kristina',
  LastName:'Evseeva',
  age: 32
}

// так можно вывести ключи объекта что бы к ним потом обратиться
// console.log(Object.keys(krista));
// console.log(Object.values(krista));
// console.log(Object.entries(krista));

for(const values of Object.values(krista)) {
  console.log(values)
}



const student1 = {
  name: 'Vasiliy',
  LastName:'Petrov'
}

student1.age = 31;


console.log(student1.name, student1.age);

// строковая интерполяция

// console.log(`${student1.name} ${student1.LastName}, (${student1.age})`);

// Деструктурирующее присваивание объекты

const {name, LastName, age} = student1

console.log(`${name} ${LastName}, (${age})`);
