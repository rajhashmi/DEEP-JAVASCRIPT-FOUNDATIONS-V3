// == prefer numeric coerion 

// if we compare string to number it will convert string into number and then it will compare that string tha he converted in a number to number

// if its not the primitive it will call toPrimitive and convert into a privitive  and then it will check

// if both have same datatype it will automatic do === ckeck



let number1 = 42;
let number2 = [42];

number1 == number2  // true 🤔 let's se how it's working;

// number1 is number  but number2 is an array means it's not a primitive so first the number2 will convert into a toPrimitve and we know the toPrimitive will convert this into string and then it will check 42 == "42" and then it will conver string into  a number bcuz == always prefer numeric coerion and know its become  42 == 42 and know the data type of this two is same so it will call === after this it will return     TRUE

// that's the bad idea 



// let's see corer cases of  Double Equal corner cases
 

// [] == ![] // true WHAT!?

// so here you will find what is happing in this code 

//  [] == false
//  "" == false
//  0  == false
//  0 === 0 

// and Boom! true 👍


let workShop1Students = []
let workShop2Students = []

if(workShop1Students == !workShop2Students){
    // 
}
if(workShop1Students != workShop2Students){
    //
}
// one is saying if it is coercively equal to its negation, and the other one  "I wanna se if it is not coercively eqaul or not"








//  corner case for boolean :->

let workShopStudents = [];

if(workShopStudents){
    // True
}


if(workShopStudents == true){
    // Nope
}

if(workShopStudents == false){
    // True
}