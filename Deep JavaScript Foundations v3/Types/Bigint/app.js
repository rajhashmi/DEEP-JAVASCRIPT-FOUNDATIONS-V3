// Bignit is primity types

// its not an IEEE number like all the other in javascript, bigint and regular number they dont really mix and match that well
// they are totally separate thing that looks

let x = 897675434512216497524145843234567n;
console.log(x);
console.log(typeof x);

// ======================================================

let y = BigInt(100);
console.log(y);
console.log(typeof y);

// ==================================

// disadvantage 😕

// you can't assign decimal value in Bigint;
// let z = 10.34n 


let a = 100n
let b = 10n 

let  divide = a/b;
console.log(divide);// 7


console.log(a == 100); // true checking value

console.log(a === 100); // true checking value and datatype too;

// we cant't use Math.max(b,a)

