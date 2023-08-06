// FUNCTIONS
// Function declaration
// We usually use the function keyword followed by the function name then the parentheses where the parameters are situated separated by commas if many.

// function showMessage(){
    // alert("Hello Negro");
// };

// showMessage(); // This is how a function is called


//We have Outer(Global) variables and Local variables
// Global: outside a function, local: inside the function.



function showMessage(){
    let negroName = 'DaQuan';
    alert("Hello "+negroName);

};
let negroName = 'Tyrone';
alert(negroName);
showMessage();
alert(negroName);
