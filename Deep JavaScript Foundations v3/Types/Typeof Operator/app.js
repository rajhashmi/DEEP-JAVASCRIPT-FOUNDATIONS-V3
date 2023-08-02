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

v = function(){};
typeof v; // "function" 

v = [1,2,3];
typeof v; // "object" 
