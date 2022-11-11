// Arrays
/* Are variables that hold multiple values*/

//Not used most often
/*const numbers = new Array(1,2,3,4,5);
console.log(numbers);
*/

const fruits = ['apples', 'oranges','mangoes','pineapples'] //You can put different types of data in a single array

fruits.push('grapes') // adds array value at the end of the array
fruits.unshift('strawberries') // adds array value at the start of the array
// fruits.pop()// removes array value at the end of the array
console.log(fruits);

console.log(fruits.indexOf('oranges'));

console.log(Array.isArray('hello')); //To check if something is an array
