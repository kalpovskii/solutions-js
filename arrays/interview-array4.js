// Развернуть массив

// const array = [1, 2, 3, 4, 5, 6];
//
// console.log(array.reverse());

// Развернуть массив без использования метода reverse()

const array = [1, 2, 3, 4, 5, 6];

const reversed = [];

for (let i = array.length - 1; i >= 0; i--) {
   reversed.push(array[i]);
}

console.log(reversed);