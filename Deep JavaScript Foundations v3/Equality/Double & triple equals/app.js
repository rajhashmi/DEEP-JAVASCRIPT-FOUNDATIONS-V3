//  1. Double equals

//  == check value (loose)



// 2. triple Equal

//  === check value and type (strick)

// unfortunatley even though it sounds really good it's not exactly the case that's not exactly the difference.



// if typeof (x) is the same as typeof(y), then 
// a. return the result of programming STRICT EQUALITY COMARISON ON    x === y 

// double and triple both check the type of 

// == (Equal Operator):

// The == operator checks if the values on both sides are equal, regardless of their data types.
// If the values are of different data types, the operator may perform type coercion to make the values comparable.
// For example:

// 5 == "5" // true (because JavaScript coerces the string to a number)


// 2.=== (Strict Equal Operator or Identity Operator):

// The === operator checks if the values on both sides are equal AND of the same data type.
// It does not perform type coercion. The values must be exactly the same type to return true.
// For example:

// 5 === "5" // false (because they are of different data types)



let studentName1 = "Frank"
let studentName2 = `${studentName1}`;

let workShopEnrollment1 = 16
let workShopEnrollment2 = workShopEnrollment1+0

studentName1 == studentName2  // true

studentName1 === studentName2 //  true

workShopEnrollment1 === workShopEnrollment2 // true
workShopEnrollment1 === workShopEnrollment2 //  true




NaN === NaN //    false
// and 
+0 === -0 // true



let workShop1 = {
    name: "Deep JS Foundation"
};

let workShop2 = {
    name: "Deep JS Foundation"
};

workShop1 == workShop2 // false

workShop1 === workShop2 // false        why?

// In JavaScript, when you use the == operator to compare two objects, it checks whether the references to the objects are the same,
//  not whether their properties are the same.


// == check value (lose) ❌
// == check value and data type (strick) ❌

// ==============================================================

// ==  allows coerion (type different) ✔️
// ===  disallows coerion (type same) ✔️