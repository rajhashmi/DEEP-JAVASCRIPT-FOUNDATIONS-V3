// 1. Abstract Operations

// These operations are not a part of the ECMAScript language; they are defined here to solely to aid the specification of the semantics of the ECMAScript language. Other, more specialized abstract operations are defined throughout this specification.

// # ToPrimitive(hint)

// toPrimitive convert non-primitive into primitive like one Object types, an Array, a Function whatever 

// and we need to make it into a primitive this is the abstract operation will do that


// toPrimitive convert non-primitive into primitive like one Object types, an Array, a Function whatever 

// and we need to make it into a primitive this is the abstract operation will do that
/*

 hint: "Number"                    hint: "String";
 
 valueOf()                             toString()     
toString()                            valueOf() 

*/
// - Working Process →
// 1. “Number” first it check the valueOf() of value if its is already a primitive it will return.
// 2. if its not then it will come to toString().
// 3. and if we try both of them and its not returning a primitive then it will return ERROR.