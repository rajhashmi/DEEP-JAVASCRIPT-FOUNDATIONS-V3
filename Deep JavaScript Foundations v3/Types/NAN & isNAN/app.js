// Special Values 

// NaN is only value does not equal tp itself altest in jaaScript. 
// NaN it's the onlyvalue that does not have what we  call the identity property 

var myAge = Number("0o19"); // 19

var myNextAge = Number("39"); // 39

var myParrotAge = Number("n/a"); // NaN

var subtract = myAge - "this is Nan"; // Nan

console.log(myParrotAge == myParrotAge); // false;

console.log(isNaN(myAge));  // false

console.log(isNaN(myParrotAge)); // true

console.log(isNaN("this is NaN"));  // true OOPS; 
// this is not a number but is it the NaN value?

// the historical reason of getting true is because for some reason the isNaN. utility coerces value to Number before it check them to be NaN


Number.isNaN(myParrotAge); // true;

Number.isNaN("this is string") // false;


// sometime after that mistake happened in initail javaScript. they decided that's a bad idea.

//  in ES6, we got a better utility the Number.isNaN utility




// and the type of NaN is Number 🤷‍♂️
