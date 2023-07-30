// // Increment and Decrement
// let counter = 4;


// for(i=0; i<15; i++){
// counter++;
// }

// alert(counter);


// // Using the Increment and Decrement Operators
// // There is no difference between the postfix(counter++) and the prefix(++counter)
// // The difference only occurs when we want to use the result.
// // If the result is to be used again; counter++ retains the old value while ++counter produces new value




// alert(2**(1/2)); // Exponentiation

// alert(8%5); // Modulus Operator

// let age = 2;

// alert(age);

// alert(2+2+"1");
// // Is not the same as
// alert("1"+2+2); //This outputs 122

// // + is the only operator that works with Strings

// alert("6"-6); // Outputs zero
// // while
// alert("6"+6); // Outputs 66

// alert(+true); //Here the + operator acts the same as Number() but is shorter

// let a = 1;
// let b = 2;

// let c = 3-(a=b+1);

// alert(c);
// alert(a);

// let n = 2;
// n+=2;
// n*=2;

// alert(n);

// let k = prompt("First number?", 1);
// let j = prompt("Second number?", 2);
// alert(+k + +j); // 12
// alert(k + j); // 3

// testing My Knowledge on Basic Arithmetic operators
// **Beginner Level:**

// 1. What are the five basic arithmetic operators in JavaScript?
// Answer: Addition, Subtraction, Multiplication, Modulus operator and Division.

// 2. How do you perform addition and subtraction in JavaScript using variables?
        // We use the - operator for subtraction and + operator for addition.
        let a = 8, b = 12;
        let c = b-a; //Subtraction //Outputs 4
        let d = a+b; //Addition //Outputs 20
    
    // **Intermediate Level:**
    
    // 3. How can you multiply two variables in JavaScript?
        //Using the * operator
        let e = 12, f = 10;
        let g = e*f; //Outputs 120
    // 4. How do you calculate the remainder (modulo) of two numbers in JavaScript?
        let j = 8, k = 3;
        let l = j%k; //Outputs 1
    // **Advanced Level:**
    
    // 5. How does operator precedence work in JavaScript when multiple arithmetic operators are used in a single expression?
        // The operator with the highest precedence is given priority thus it is carried out in order.
    // 6. Can you explain the concept of unary operators and provide an example of their usage?
        // An unary operator is an operator which involves one operand. The operator can also be used to convert any data type to a Number.
        // eg 
        let n = "Hello World";
        n = +n;
        
        alert(typeof n);