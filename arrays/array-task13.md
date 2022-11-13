### Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

```js
function myFunction (arr) {
   return arr.every(elem => elem === arr[0]);
}
```
