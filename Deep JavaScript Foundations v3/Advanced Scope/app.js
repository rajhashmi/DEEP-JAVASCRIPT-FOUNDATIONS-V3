// lexical scope

// this refereed toString, this idea od scope being nested within each other and specifically the idea that a compiler, a parser, a processor is 
// figurig on out all those scope ahead of time before being executed, is this the consept of lexical scope



// lexical scopes & Dynamic scops :->

// Lexical Scope (Static Scope):

// 1. Lexical scope determines the scope of a variable based on its position in the source code's hierarchical structure.

// 2. Scope is determined at compile time and remains fixed throughout the code's execution.

// 3. Variables are accessed based on the nesting of functions or blocks in the code.

// 4. Each inner scope has access to variables from its parent scope, but not vice versa.


// =============================================

/*
DYNAMIC  SCOPE 

this is not exist in javaScript but if did exist in javaScript let's see how its works.



var teacher = "shahid";

function ask(question){
    console.log(teacher,question);
}
function otherClass(){
    var teacher = "hashmi";
    ask("Why!")
    }

working?:->

observe the teacher in line 33 it will search in his own scope first after that it will search in global scope but in dynamic 
scope instead of searching in global scope it will search the teacher variable in onther function where it call upon;


the dynamic scoope is determined based upon the conditions at runtime, where the laxical scope is determined
at author time

*/

// function scope :->

function teacher (teacher){
    var teachers = teacher;
    console.log(teachers);
}
(teacher)() // we call like this too but dont want someone change this


// (function (teacher){
//     console.log(teacher);
// })("shahid");

// // block scope :->

// {
//     let teacher = "hashmi";
//     console.log(teacher);
// }
//  almost same but we use lat instead of var bcuz for historical reason var is atached to its parent scope
//  block are not scope until we use let or const in it. and it make implicity block scope



// Hoisting

// hoising is not exist in javaScript

// Hoisting is a concept in JavaScript where variable and function declarations are moved (conceptually) to the top of their containing scope during the compilation phase, before the actual code execution takes place. This means that you can use variables and call functions before they are declared in the code.

// However, it's important to note that hoisting doesn't physically move code to the top of the file; it's a behavior that's managed by the JavaScript engine during its processing of the code.

// Here's a brief summary of how hoisting works for variable and function declarations:

// Variable Declarations (Hoisted):
// Variable declarations using the var keyword are hoisted to the top of their containing scope. This means that you can access the variable before its declaration, but its value will be undefined until it's actually assigned a value.