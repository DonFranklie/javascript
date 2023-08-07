// FUNCTIONS
// Default values
// These are what are given when an argument is not passed into a function when it's being called.

// let from = "Franklin";
// function showMessage(from, text = "empty message"){ 
//     from = "*"+from+"*";
//     alert(from+": " +text);
// }

// showMessage(from); 


let text = prompt("What is your text? ", '');
function showMessage(text){
    // text = text ;
    alert(text|| "No text given");
}

showMessage(text);





// Function Parameters

// let from = "Franklin";
// function showMessage(from, text){ 
//     //The ones inside the parentheses when the function is declared are called parameters
//     from = "*"+from+"*";
//     alert(from+": " +text);
// }

// showMessage(from, "Hello guys"); 
// // The ones inside the parentheses when the function is called are called arguments

// alert(from);

