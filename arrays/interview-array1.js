// Найти сумму элементов массива

const array = [1, 2, 3, 4, 5, 6];
// let sum = 0;
//
// for (let i = 0; i < array.length; i++) {
//    sum += array[i];
//    console.log(sum);
// }

let sum = array.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// console.log(eval(
//     array.join("+")
// ));



