var trendRate = -0;
trendRate === -0 // true

trendRate.toString(); // "0" OOPS;
// js developer thinks  that it was a bug if you took a -0 and stringified it and got -0 in the string

//toString is lies to us😕

trendRate === 0  //  true; OOPS;
//  triple equals is also lies to us 😕

trendRate < 0;  //false

// this too lie 

trendRate > 0; // false

// this too lie 

// you could get -0s but you couldn't determine that you have one untill ES6 the added a utility called object.is

// It just like quadruple equals ====

Object.is(trendRate, -0); // true;
Object.is(trendRate, 0) // false;


// there is a utility to check is it negative or not 

Math.sign(-3); // -1
Math.sign(2); // 1
Math.sign(-0); // -0 What?  It should return me -1 isnt'it? 
Math.sign(0); // 0  How?    and this should return 1 right? 

// Lets "Fix" Math.sign(..)
function sign(v){
    return v !== 0 ? Math.sign(v) : Object.is(v,0) ? -1 : 1;
}
sign(-3) // -1
sign(3) // 1
sign(-0) // -1
sign(0) // 1

// the Best example of -0 

function formateTrend(trendRate){
    var direction =
    (trendRate < 0 || Object.is(trendRate,-0)) ? "⬇️" : "⬆️";
    return `${direction} ${Math.abs(trendRate)}`;
}
formateTrend(-3);  // "⬇️ 0"
formateTrend(3);     // "⬆️ 0"
formateTrend(-0);  // "⬇️ 0"
formateTrend(0);  // "⬆️ 0"

