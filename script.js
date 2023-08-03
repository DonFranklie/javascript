// Null Coalescing
// This is new in JavaScript. You can't use it on old browsers, you need to use polyfills.

let height;
let width;
 
let area = (height??100)*(width??20);

// alert(area);


// We can use ?? the same as || but the problem is that OR operator returns the first truthy value and the ?? operator returns the first defined value.
// The problem with using || is when we really just wanna get the value of a variable, even if it's zero. As we all know, || reads 0 as a falsy value
// So it will automatically passover 0 as a value. The following example describes what I have just said best;

let weight = 0;

alert(weight || 100); // Outputs 100
alert(weight ?? 100); // Outputs 0

// See the difference now.

// In summary, ?? operator gives us the original value, it does not matter the boolean definition of it.
// It simply checks the definition of a variable.

// I would say that in real life projects, we can use it when, a user has just got on our site,
// He most likely has not registered so I would write a like the following;

let firstName = null;
let secondName = null;
let nickName = null;

alert(firstName??secondName??nickName??"Anonymous");

