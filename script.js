// Learning Comparison Operators
// We have >, <, >=, <=, ==, ===, !=

let firstArgument = 4;
let secondArgument = 6;

// +prompt("Enter your First Number", firstArgument);
// +prompt("Enter your Second Number", secondArgument);

let result = firstArgument == secondArgument;
// alert(result);

// There is also String Comaprison where javaScript uses the alphabetical order. It analyses letter by letter.

// alert("W" == "W")

// In String Comparison we don't necessarily use the dictionary method, this can be illustrated in the following way rather we use the one with the greatest unicode index
// alert("a" > "A"); //Outputs True

// When Comparing different data types, they are all converted to numbers.
// alert("2">"12"); //Outputs true

// Tests
// Beginner Level:

// What are the six comparison operators in JavaScript?
// >, <, >=, <=, ==, !=, === 
// How do comparison operators work, and what do they return?
    // They compare the values given and they return a boolean value, either true or false
// Intermediate Level:

// What is the difference between the strict equality operator (===) and the abstract equality operator (==)?
    // The abstract equality operator coverts the values to numbers while the strict equality operator compares the values without type conversion.
// How do comparison operators handle non-primitive data types, such as objects and arrays?
    //
// Advanced Level:

// Can you explain truthy and falsy values in JavaScript, and how they are relevant to comparison operators?

// What are short-circuit evaluation and how is it used in conjunction with comparison operators?