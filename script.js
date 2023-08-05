// The Switch Statement
// It is essential when we want to avoid using multiple if checks
// Here is an example;

let arg = +prompt("Enter a number; ", '');

switch(arg){
    case 1:
        alert("One");
        break;

    case 2:
        alert("Two");
        break;

    case 3:
        alert("Three");
        break;

    default:
        alert("That is above 3");
        break;
}