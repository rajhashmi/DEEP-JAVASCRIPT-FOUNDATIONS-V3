//  what is lexical scope mechanism of javascript

// Scope: where to look for things

// we are looking for indendifier 

let x = 42;
// here x is being assigned to
console.log(y);// and  Y that's being a value retrieved from

// all varialbe are in one  of those two rols in your program all varialbe are either receiving the assignment of the some value, or
// you are retrieving a value from the varialbe;

// javaScript is, comlipiled, or at least, as we say,its's paresed

// function and blocks are unit of scope

// let's digg into this :->

var teacher = "Shahid";

function otherClass(){
    var teacher = "hashmi";
    console.log("Welcome!");
}
function ask(){
    var question = "Why?";
    console.log(question);
}

otherClass();
ask()


// having two variable at different scope of the same name that has a term, it's called shadowing


// this all compiling is having in complile time not in run time



//  Executing code...

//  let teacher = "shahid hashmi";

// this  variable looks likes one statement but acually it is two the [ LET TEACHER ] this part compiler handles and the [teacher = "shahidh ashmi"] this will part executing will handle


// every time we run program its start from sractch 

//  function ****(parameter) -> this parameter is target

// console.log(****(teacher)) -> this is source




var teacher = "shahid hashmi";

function otherClass(){
    teacher = "hashmi"; // the varaible teacher = "shahid hashmi"  will be now "hashmi"
    topic = "react";  //   but what about this when we asign a value to variable that not even exist first JS machine will search in        otherClass scope after in global scope instead of giving erorr it will say like "hey i did't find so i created one for you isn't it helpfull" and it called auto global. but there is catch it is creating in run time so the variable will created in run time and it will increase our run time to avoid this we use  "strict mode"
    console.log("welcome")
}
otherClass(); // welcome

teacher
topic


// lets use strict mode;

var teacher = "shahid hashmi";

function otherClass(){
    "use strict"  // all thing ganna go through same process but when topic will search in global scope it will return REFERENCE ERORR
    teacher = "hashmi"; // the varaible teacher = "shahid hashmi"  will be now "hashmi"
    topic = "react";  
    console.log("welcome")
}
otherClass(); // welcome

teacher
topic
//  caveat of "strict mode"; inside of ES6 modules, strict mode is assume, that code in running in strict mode


//  if we have a sourse referenced to a varaible that is undeclared it always throws a ReferenceError