// you claim to avoid coercion because it's evil, but

// lets take at some example where you're already doing coercion whether we realize or not

var numStudents = 16;

console.log(`There are ${numStudents} student.`); // ===> "There are 16 student."

// when you observe you will realize we already oing coerion (number to String)

var message = "there are ";
var messageTwo = " student.";

console.log(message + numStudents + messageTwo);
// when eigther one of the string its prefered string concatination

// lets do in explicit dont do this 
console.log(
    `There are ${[numStudents].join("")} student.`
);
console.log(
    `There are ${[numStudents].toString()} student.`
);
console.log(
    `There are ${String(numStudents)} student.`
);

// but when its come to primitive value its? becuz primitive value does not have methods. so you already doing implicity coerion here. you dont 
// have any choice
 
let newStudent = "16"


function addStudent(numStudents){
    return numStudents+1
}
console.log(addStudent(newStudent)); // 161


function addStudentNumberUsingPlus(numStudents){
    return +numStudents + 1    // here the plus operator before numStudent convertion string into number 
}
console.log(addStudentNumberUsingPlus(newStudent())); // 17


// you can use this too 

function addStudentNumber(numStudents){
    return Number(numStudents) + 1
}
console.log(addStudentNumber(newStudent)); // 17


// lets check in subtract situation 

function suspendStudent(removeStudents){
    return removeStudents - 1
}
console.log(suspendStudent(newStudent));
// this is will convert into number and then subtract because js is smart to unederstand that subtract will not happen in string


Boolean("") // false
Boolean("    \t\n") // true OOPS!



// Recall Falsy vs Truthy?
if(studentinputElem.value){
    numStudents = 
    Number(studentinputElem.value)
}
// it will return false in empty string but what if the string just have white space? corner case it will return true

// here another way to fing the string is true of false 
while (newStudent.length){
    enrollStudent(newStudent.pop())
}
// if the length is 0 it will return false if length have some length it will return true



Boolean(undefined) //  false
Boolean(null)  //      false
Boolean({}) //         true
Boolean() //           false
Boolean("")//          false
Boolean(-0)//          false
Boolean([])//          true 
