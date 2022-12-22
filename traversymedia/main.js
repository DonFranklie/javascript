// Arrays

const carComp = ['toyota', 'tesla', 'mazda', 'ford'];
console.log(carComp);

carComp.pop(); //pop removes the last entry in the array
carComp.push('mclaren'); // push() adds a new entry to the array
carComp.unshift('Range Rover');
console.log(carComp);

console.log(Array.isArray(carComp)); //Checking if it is an Array

console.log(carComp.indexOf('toyota'));

