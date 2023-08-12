var v;
typeof v; // "Undefined";

// Undefined VS undeclared 
// ===============================================================================================
//  * Undefined

// 1. Undefined  there is deffinitely a variable, at the moment. it does not have any value
// ==============================================================================================
// ==============================================================================================
// 2. undeclared

//  undeclared means its never been created in any scope that we hace access to.
// ==========================================================================================
// we can think undefined as a default  value
// the most appropriate way to thin about it is, does not currently have a value
v = "1";
typeof v // "string";

v = 2;
typeof v // "number";

v = true;
typeof v; // "boolean"



v = {}
typeof v // "object"

v = Symbol();
typeof v; // "Symbol"


v = null;
typeof v // "object"

console.log(typeof "Hello");                // "string"
console.log(typeof 42);                     // "number"
console.log(typeof 3.14);                   // "number"
console.log(typeof true);                   // "boolean"
console.log(typeof undefined);              // "undefined"
console.log(typeof null);                   // "object"
console.log(typeof [1, 2, 3]);              // "object"
console.log(typeof { key: "value" });       // "object"
console.log(typeof function() {});          // "function"
console.log(typeof Symbol("symbol"));       // "symbol" (ES6)
console.log(typeof BigInt(123));            // "bigint" (ES11)

console.log(typeof NaN);                    // "number" (NaN is a special kind of number)
console.log(typeof Infinity);               // "number" (Infinity is a special number)
console.log(typeof Math);                   // "object" (Math is an object with mathematical functions)
console.log(typeof Math.random);            // "function" (Math.random is a function)
console.log(typeof document);               // "object" (in a browser context)
console.log(typeof document.createElement); // "function"



v = function(){};
typeof v; // "function" 

v = [1,2,3];
typeof v; // "object" 
