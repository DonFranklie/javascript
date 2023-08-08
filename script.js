//Arrow Funtions

let ask = (question, yes, no)=>{
    if(confirm(question)) yes();
    else no();
}

ask("Do you agree?",
    ()=>alert("You agreed!"),
    ()=>alert("You disagree!")
);



let sayHi = () => {
    alert("Hello");
};

let func = sayHi;

func();

