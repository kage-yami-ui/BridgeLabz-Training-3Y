// Q5 — Hoisting Lab: The Sequence Trap

//Part A: Predict and run the original code

// "use strict";

// console.log(score);
// announce();

// var score = 50;

// function announce() {
//     console.log("Game started");
// }

// let status = "ready";

// startGame();

// function startGame() {
//     console.log(status);
// }



//Part B: Fix the code to avoid undefined values

// "use strict";

// // Initialize variables before using them.
// let score = 50;
// let status = "ready";

// function announce() {
//     console.log("Game started");
// }

// function startGame() {
//     console.log(status);
// }

// console.log(score);
// announce();
// startGame();



//Part C: Rewrite using arrow functions

"use strict";

const score = 50;
const status = "ready";

// Arrow functions are stored in const variables.
// They cannot be called before these initializations.
const announce = () => {
    console.log("Game started");
};

const startGame = () => {
    console.log(status);
};

console.log(score);
announce();
startGame();
