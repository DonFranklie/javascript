//Conditional Branching
// The use of if(...) statement and ? the ternary operator

// let year = prompt("Which year was ECMA Script 6 released?", '');

// let message = (year>2015) ? "Way after" :
// (year==2015) ? "Bingo":
// "Wrong";

// alert(message);

// Using if else statement is better for readability though using the ternary operator is shorter and simpler.

let companyName = prompt("What is the name of the company the created JavaScript?", '');

if(companyName == "netscape"){
    alert("Correct answer")
}else{
    alert("Not exactly");
}