// Anytime you have any value that is not a Boolean it’s used in place that needs a Boolean, this operation occurs. 

// - it’s just lookup if its false then it is Falsy value it will return false :-

// here are some example of falsy value 


/*
these all are Falsy value
================================
 Falsy values :=>                  
			""
    0, -0
    null
    NaN
    Undefined
================================
================================
Truthy values :=> 

"shahid hashmi"
23
{a:1}
[1,2]
true
function(){...}
[]
...

*/

console.log(Boolean()); // false
console.log(Boolean(1)); // true
console.log(Boolean([])); // true
console.log(Boolean("")); // false
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false