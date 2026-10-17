// Q8 — Strict Mode Showdown


//Part A: Without strict mode

// function demo(a, a) {
//     total = 10; // Creates a global property in a classic script.
//     console.log("Second a:", a);
//     console.log("Total:", total);

//     // Deleting an unqualified identifier is allowed syntactically
//     // in sloppy mode, but does not delete the binding.
//     console.log("Delete result:", delete total);
// }

demo(5, 10);
console.log("Global total:", total);


//Part B: With strict mode

// "use strict";

// function demo(a, a) {
//     total = 10;
//     delete total;
// }

// demo(5, 10);


//Part C: Correct ES6 version

"use strict";

function demo(a, b) {
    let total = 10;

    console.log("First parameter:", a);
    console.log("Second parameter:", b);
    console.log("Total:", total);

    // Use an object property when deletion is required.
    const data = { total: total };
    delete data.total;

    console.log("Object after deletion:", data);
}

demo(5, 10);
