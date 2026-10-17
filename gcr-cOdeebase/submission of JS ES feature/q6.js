// Q6 — Pyramid Pattern Generator

"use strict";

const readline = require("node:readline");

// Default number of rows is 5.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter number of rows (default 5): ", (answer) => {
    const rows = answer.trim() === "" ? 5 : Number(answer);

    if (!Number.isInteger(rows) || rows < 1 || rows > 100) {
        console.log("Please enter a whole number from 1 to 100.");
        rl.close();
        return;
    }

    console.log("\n--- Pyramid Pattern ---");

    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trimEnd());
    }

    rl.close();
});
