// undefined vs undeclared

//1. undefined

// undefined there is a deffinitely a variable, and at the moment it has no value 

// 2. undeclared

// undeclared means its never been created in any scope that we have access to

// 3. uninitialized 

// introduce in ES6  that variable can be in is called the TDZ, temporal dead zone

// TDZ. Temporal dead zone

// A variable declared with let, const, or class is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the line where the variable is declared and initialized.

{
    // TDZ starts at beginning of scope
    console.log(bar); // "undefined"
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    var bar = 1;
    let foo = 2; // End of TDZ (for foo)
  }
// ============================================================

  {
    // TDZ starts at beginning of scope
    const func = () => console.log(letVar); // OK
  
    // Within the TDZ letVar access throws `ReferenceError`
  
    let letVar = 3; // End of TDZ (for letVar)
    func(); // Called outside TDZ!
  }
  
//   =========================================================

typeof i; // ReferenceError: Cannot access 'i' before initialization
let i = 10;

// =============================================================


console.log(typeof undeclaredVariable); // "undefined"
