// toNumber  

let num = 10;
console.log(num + "10"); // 1010 


console.log(num + +"10"); // 20 
// adding concatinate operator before string 10 and its convertion string "10" to number first 

  
// this is more interesting some of them are well formed and some of them are strange””

// - Abstraction Operation: ToNumber →


/*
 ""   -->      0
 "0"  -->      0
"-0"  -->     -0
"  009 "-->    9
"3.14159"-->   3.14159
"0."-->        0
"."-->         NaN
" 0xaf"-->   175 

Even it can handle haxadecimal
*/


// - Numerification of other primitive values.


// false ---> 0    this is becuse of historical stuff
// true ----> 1    and this is too
// null ----> 0  aah okey?
// undefined -->  NaN [ What? ]


// - when we use toNumber on object remember it evokes the toPrimitive eith the Number hint

//         and you recall that conslt first the valueOf() , and toString()

