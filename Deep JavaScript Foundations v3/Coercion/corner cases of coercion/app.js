// it is impossible to design a system that won't have corner cases.
// javaScript have some corner case

Number("")//            0           OOPS!
Number("   /t/n")//     0           OOPS!
Number(null)//          0           OOPS!
Number(undefined)//     NaN         
Number( [] )//          0           OOPS!
Number( [1,2,3] )//     NaN         
Number( [null] )//      0           OOPA
Number( [undefined] )// 0           OOPS!
Number({})//            NaN         


// ===================================================

String( -0 )  //               "0"               OOPS!
String( undefined)//            "null"
String( null )//                "undefined"
String( [null] )//              ""              OOPS!
String( [undefined] )//         ""              OOPS!

// ==========================================================


Boolean(new Boolean(false) );//         true    WHAT?🤔
// we don't do a twoPrimitive on it, we ust ask is it on the falsy list or not


str1 = ""
str2 = "        "

Number(str1) // 0

Number(str2) // 0 
// it is not counting white space


// ==================================================================================================
Number(true)//    1
Number(false)//   0

// let's see how the this coerion is a bad idea

    1 < 2;//        true
    2 < 3;//        true
    1 < 2 < 3//     true    (but...)

    (1 < 2) < 3;
    (true) < 3
    1 < 3;       // true (ok...)

// this is just a acident 

//*************************************************

    3 > 2       // true
    2 > 1       // true
    3 > 2 > 1   // false   OOPS!

    (3 > 2) > 1;
    (true) > 1
    1 > 1           // false


typeof []; // -> 'object'
typeof null; // -> 'object'

// however
null instanceof Object; // false

Absolutely, let's make it even simpler:

// Imagine you have a special box called "Object" that holds different things. This box has some rules, and you can check if something is inside this "Object" box using the `instanceof` tool.

// Now, if you ask the `instanceof` tool whether an empty box called "null" is inside the "Object" box, it will say "No, it's not inside." This is because even though "null" is a type of box, it's not exactly the same as the "Object" box, so the tool says they're not related.

// So, when you use `null instanceof Object`, the answer is "No, null is not inside the Object box."

// I hope this helps make it clearer! If you have more questions or want to learn anything else, feel free to ask. We're here to help!


Object.prototype.toString.call([]);
// -> '[object Array]'

Object.prototype.toString.call(new Date());
// -> '[object Date]'

Object.prototype.toString.call(null);
// -> '[object Null]'
