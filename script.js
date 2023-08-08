let age = prompt("How old are you?"); // take 16 as an example

if (age < 18) {
// welcome();
function welcome() {
alert("Hello!");
}

} else {
welcome();
function welcome() {
alert("Greetings!");
}
}

welcome();

//callback Funtions

// function ask(question, yes, no){
//     if(confirm(question)) yes();
//     else no();
// }

// ask("Do you agree?",
//     function(){alert("You agreed!")},
//     function(){alert("You disagree!")}
// );


// FUNCTION Expressions

// let sayHi = function(){
//     alert("Hello");
// };

// let func = sayHi;

// alert(func);

