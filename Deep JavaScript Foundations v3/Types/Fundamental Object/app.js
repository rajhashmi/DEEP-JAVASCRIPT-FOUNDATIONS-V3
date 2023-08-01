// Fundamental Object 

// Biult-in Object

// Native function


// If you need to constract an object of that fundament type 

// Use New:
/*        Object()
        Array()
        Date()
        Function()
        RegExp()
        Error()
*/

//  Don't use New: --->
/*

 string()
 Number()
 Boolean()

 String, Boolean and Number when used as a function coerce any value to that respective primitive type.
*/

var yesterday = new Date("March 6, 2019");
yesterday.toString();
// "Wed Mar 06 2019 00:00:00 GMT+0530 (India Standard Time)"

let MyGPA = String(3.5)
//  '3.5'