### Write a function that takes an array of numbers as argument. It should return the average of the numbers.

```js
function myFunction(arr) {
   return arr.reduce ((sum, num) => sum + num, 0) / arr.length;
}
```
