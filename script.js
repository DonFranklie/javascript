// LOOPS: WHILE and FOR

// BREAKING THE LOOP
// let sum = 0;
// alert("After entering your decide number of operands press ok twice to get the sum");
// labelName: while (true) {
// let value = +prompt("Enter a number", '');
// if (value % 2 == 0){
//     alert("Don't use even numbers")
//  break labelName} else{
// sum += value;
//  };// (*)
// }
// alert( 'Sum: ' + sum );

//CONTINUE TO NEXT ITERATION
// for(i = 0; i<10; i++){

//     if(i%2 == 0) continue;

//     alert(i);
// }

// LABELS FOR BREAK/CONTINUE
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    // what if we want to exit from here to Done (below)?
    if (!input) break outer;
    }
    }
    alert('Done!');

// FOR LOOP
// let i = 0;

// for (; i < 3; i++){
//     alert(i);
// }
// alert("Out of the loop");

// alert(i);

//WHILE LOOP

// let i = 0;

// while(i<3){
//     alert(i);
//     i++; // If omitted the loop would run (in theory) forever outputting zero
// }

// let i = 3;

// while(i){
//     alert(i);
//     i--; // If omitted the loop would run (in theory) forever outputting zero
// }

// THE DO...WHILE LOOP

// let i = 0;

// do{
//     alert(i);
//     i++;
// }while(i<3);

// Instead of this loop we normally just resort to using the while loop,
// do...while loop is useful when we want the loop body to run atleast once regardless of whether it's truthy or not.