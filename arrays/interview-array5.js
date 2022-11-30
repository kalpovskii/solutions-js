// Удалить falsy значения

const array = [7, "correct", 0, false, 9, NaN, ""];

// const notFalsy = [];
//
// for (let i = 0; i < array.length; i++) {
//    if (!!array[i]) {
//       notFalsy.push(array[i]);
//    }
// }
// console.log(notFalsy);

const notFalsy = array.filter(n => !!n);
console.log(notFalsy);