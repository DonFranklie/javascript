// LOGICAL OPERATORS
// They include OR(||), AND(&&), NOT(!) and Null coalescing(??)

// The OR operator
//`This one Mostly operates with boolean values, if a value is not boolean, it converts it to boolean then evaluates it.`
//`It evaluates from left to right`
//`Always picks the first truthy value, if no truthy value it reports false`

// alert(true||true);
// alert(true||false)
// alert(false||true)
// alert(false||false) //Outputs false

// let hour = 29;
// let isWeekend = true;

// if(hour<10||hour>18||isWeekend){
//     alert("Office closed");
// }

// let result = value1 || value2 || value3;
// The OR operator evaluates the operands from left to right.
//If all the operands are evaluted, all are falsy, the last value is returned in its original form.

// alert(null || undefined || 0);
//Short circuit evaluation
// true || alert("not printed");
// false || alert("printed"); // This is the only alue printed.
// let x = 1;
// (x > 0) && alert( 'Greater than zero!' );

// The !NOT operator
// It basically negates a value and returns the boolean

// alert(!!"Wafula");
// If we use !! it says we negate then the second ! reverses your negation

// let age = 12;

// if (age)

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );