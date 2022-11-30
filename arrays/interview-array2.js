// Найти максимальный/минимальный элементы массива

const array = [1, 2, 3, 4, 5, 6];

// перебор циклом for

// let max = array[0];
// for (let i = 0; i < array.length; i++) {
//
//    if (max < array[i]) {
//       max = array[i];
//    }
// }
// console.log(max);

// метод reduce

let max = array.reduce((acc, next) => Math.max(acc, next))
console.log(max);

// метод sort

// array.sort((x1, x2) => x1 - x2);
// let max = array[array.length - 1];
// console.log(max);

// метод math max и оператор spread
// метод math max и метод apply(context, array)

// console.log(
//     // Math.max(...array)
//     Math.max.apply(null, array)
// )


