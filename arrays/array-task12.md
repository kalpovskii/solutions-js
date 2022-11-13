###  Write a function that takes an array of strings as argument. Return the longest string.

```js
function myFunction (arr) {
   return arr.reduce((a, b) => a.length > b.length ? a : b);
}
```
