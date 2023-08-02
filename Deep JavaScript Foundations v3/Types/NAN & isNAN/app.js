// Special Values 

// NaN is stand for --> Not a Number
// but we should think of it as --> Invalid Number 
// this make more sence because the type of of NaN is Number and its stand for Not a Number 

// NaN is only value does not equal tp itself altest in jaaScript. 
// NaN it's the only value that does not have what we  call the identity property 

var myAge = Number("0o19"); // 19

var myNextAge = Number("39"); // 39

var myParrotAge = Number("n/a"); // NaN

var subtract = myAge - "this is Nan"; // NaN

console.log(myParrotAge == myParrotAge); // false;
// here you can see myParrotAge is NaN isn't but when we compare each other it should return true? but why its reuturn me false?
// here the word come identity property. NaN does not have its own identity property that's why its returning false 

console.log(isNaN(myAge));  // false

console.log(isNaN(myParrotAge)); // true
// this make sence because are dividing letters "n/a"

console.log(isNaN("this is NaN"));  // true OOPS; 
// this is not a number but is it the NaN value? 🤔

// the historical reason of getting true is because for some reason the isNaN. utility coerces value to Number before it check them to be NaN


// sometime after that mistake happened in initail javaScript. they decided that's a bad idea.

//  in ES6, we got a better utility the Number.isNaN utility

Number.isNaN(myParrotAge); // true;


Number.isNaN("this is string") // false;


// and the type of NaN is Number 🤷‍♂️





