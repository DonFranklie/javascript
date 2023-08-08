// FUNCTIONS
// Naming functions
// A function shold be namd according to what it does, this is why
// we should use verbal prefixes to explicitly describe a function's usage.
// And a function should only be able to do the action described by it's name, no more no less
// For examples:
// changeColor is function that changes the color of something, let that be only action it does.

// Returning a Value
// A function can return a value back into the calling code as the result.

// function sum(a,b){
//     return a + b;
// }

// alert(sum(4,3));

// function checkAge(age){
//     if(age>=18){
//         return true;
//     }else{
//         return false;
//     }
// };

// function checkAge(age){age>18?true:confirm("Did Parents allow you?")};

// function checkAge(age){ return( age>18||confirm("Did your parents allow you?"))}

// let age = +prompt("How old are you? ", 18);
// checkAge(age);

// if(checkAge(age)){
//     alert("Access allowed");
// }else{
//     alert("Access denied");
// }

//Note
//If an expression is long after the return directive, don't go to the next line unless
// you wrap the expression as a return value like this:

// if(money){
// return (
//     some + long + expression + (a * b)
// );
// };


// function min(a, b){
//     if(a>b){
//         return alert(b)
//     }else if(b>a){
//         return alert(a)
//     }else{
//         return alert("They are equal");
//     }
// };

// min(3,3);

function pow(x, n){
    return x**n;

}

let x = +prompt("Enter x:", 0);
let n = +prompt("Enter n:", 1);


if(x<1){
    alert(`${x} is a not natural number`)
}else if(n<1){
    alert(`${n} is a not natural number`)
}
else{
pow(x, n);
}

alert(pow(x,n));
