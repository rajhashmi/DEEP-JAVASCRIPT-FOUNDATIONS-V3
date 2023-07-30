var v;
typeof v; // "Undefined";

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