// ==================================================== DEEP JAVASCRIPT FOUNDATION V3 ======================================================

// preIncrement and postIncrement

function postIncrement(){
    let x = 40;
    x++; // 40
    x ;// 41
}

function preIncrement(){
    let x = 40;
    ++x; // 42
    x; // 42
}

// with string 

function postIncrementWithString(){
    let y = "5";
    y = y + 1; // "51"

    let x = "5";
    x++;   // 5
    y; // 6
}

// x++ Mean:

function plusPlus(orig_x){
    let orig_x_coered = Number(orig_x);
    x = orig_x_coered + 1;
    return orig_x_coered
}
console.log(plusPlus("5")); 