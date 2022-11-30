// Сортировка массива чисел

const array = [1, 22, 23, 43, 5, 6];

array.sort((x1, x2) => x1 - x2)
console.log(array);

// Сортировка массива, элементы которого являются обьектами

// const users = [
//    {
//       name: 'John',
//       age: 22
//    },
//    {
//       name: 'Denis',
//       age: 30
//    }
// ]
//
// users.sort((x1, x2) => x1.age - x2.age )
// console.log(users);



// Если нам нужно сравнить не числа, а строки

// const users = [
//    {
//       name: 'John',
//       age: 22
//    },
//    {
//       name: 'atrick',
//       age: 230
//    },
//    {
//       name: 'Denis',
//       age: 30
//    }
// ]
//
// users.sort((x1, x2) => {
//    return x1.name.localeCompare(x2.name);
// } )
// console.log(users);