### Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

```js
function myFunction(a) {
   return a.filter(elem => elem < 0).length;
}
```
