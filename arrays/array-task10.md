### Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

```js
function myFunction(a) {
   return a.reduce((sum, num) => sum + num, 0);
}
```
