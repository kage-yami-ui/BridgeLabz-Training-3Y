// Q10 — Nested Hoisting and Closures

// Part A: Predict and run the original code

"use strict";

function outer() {
    console.log(count);
    var count = 5;

    function inner() {
        console.log(count);
        var count = 10;
    }

    inner();
}

outer();


// Part B: Convert the inner function to an arrow function


"use strict";

function outer() {
    console.log("Outer before assignment:", count);
    var count = 5;

    const inner = () => {
        // No local count is declared here.
        // The arrow function reads outer's count.
        console.log("Inner count:", count);
    };

    inner();
}

outer();


// Part C: Debugging and call stack
// For the original code, set breakpoints on both console.log() statements and run the program using VS Code's debugger.
// Call stack flow
// 1. Global script
// Calls outer()


// 2. outer()
// Logs undefined, then assigns count = 5


// 3. inner()
// Creates its own count and logs undefined


// 4. Return to outer()
// Completes and returns to the global script


// During debugging, inspect count in both function scopes. The outer() and inner() functions have separate local bindings, even though the variables share the same name.