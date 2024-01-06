// Task1
function forEach(array, fn) {
    for(const [ix, el] of array.entries()) {
        fn(el, ix, array);
    }
}

// Task2
function map(array, fn) {
    const newArray = [];

    for(const [ix, el] of array.entries()) {
        fn(el, ix, array);
    }

    return newArray;
}

// Task3
function reduce(array, fn, initial) {
    let startIndex = 0;
    let all = initial;

    if(initial === undefined) {
        startIndex = 1;
        all = array[0];
    }

    for(let i = startIndex; i < array.length; i++) {
        all = fn(all, array[i], i, array);
    }

    return all;
}

// Task4!
function upperProps(obj) {
    return Object.keys(obj).map(k => k.toUpperCase());
}

export{ forEach, map, reduce, toUpperCase };



// Вторая часть домашки 2


// task1
function isAllTrue(array, fn) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error ('empty array');
    }

    if(typeof fn !== 'function') {
        throw new Error('fn is not a function');
    }

    for(const el of array) {
        if(!fn(el)) {
            return false;
        }
    }

    return true;
}


// task2

function isSomeTrue (arrat, fn) {
    if(!Array.isArray(array) || array.length === 0) {
        throw new Error('empty array');
    }

    if(typeof fn !== 'function') {
        throw new Error('fn is not a function');
    }

    for(const el of array) {
        if(fn(el)) {
            return true;
        }
    }

    return false;
}

// task3

function returnBadArguments (fn, ...args) {
    if (typeof fn !== 'function') {
        throw new Error('fn is not a function');
    }

    const badArgs = [];

    for (const arg of args) {
        try {
            fn(arg);
        } catch {
            badArgs.push(arg);
        }
    }

    return badArgs;
}


// task4

function calculator (number = 0) {
    if (typeof number !== 'number') {
        throw new Error('number is not a number');
    }

    return {
        sum(...args) {
            return args.reduce((all, current) => all + current, number);
        },
        dif(...args) {
            return args.reduce((all, current) => all - current, number);
        },
        div(...args) {
            if(args.some(a => a === 0)) {
                throw new Error ('division by 0');
            }

            return args.reduce((all, current) => all / current, number);
        },
        mul(...args) {
            return args.reduce((all, current) => all * current, number);
        },
    }
}


// Задачи курсового проекта
// task1
// import photosDB from './photos.json';
// import friensDB from './friens.json';

// export default {
//     getRandomElement(array) {
//         if(!array.length) {
//             return null;
//         }

//         const index = Math.round(Math.random() * (array.length - 1));
        
//         return array[index];
//     },

//     getNextPhoto() {},
// };


// task2
export default {
    getRandomElement(array) {},


getNextPhoto() {
    const friend = this.getRandomElement(friendsDB);
    const photos = photosDB[friend.id];
    const photo = this.getRandomElement(photos);

    return {friend, url: photo.url};

    },
};