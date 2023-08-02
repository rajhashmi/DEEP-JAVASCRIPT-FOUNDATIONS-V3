// 1. Abstract Operations

// The abstract operation being discussed here is ToPrimitive, which is used to convert non-primitive values 
//   (like objects, arrays, functions, etc.) into primitive values (like numbers or strings) when necessary.

// These operations are not a part of the ECMAScript language; they are defined here to solely to aid the specification of the semantics of the ECMAScript language. Other, more specialized abstract operations are defined throughout this specification.



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
// # ToPrimitive(hint)

```jsx
//hint: "Nnmber"                 hint: "String";
valueOf()                             toString()     
toString()                            valueOf() 
```

// - Working Process →
// 1. “Number” first it check the valueOf() of value if its is already a primitive it will return.
// 2. if its not then it will come to toString().
// 3. and if we try both of them and its not returning a primitive then it will return ERROR.

// here the codde of it ==>
