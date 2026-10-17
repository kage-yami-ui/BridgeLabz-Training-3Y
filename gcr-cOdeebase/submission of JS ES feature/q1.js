//Q1 — Dynamic Data Parser

"use strict";

// Q1: Dynamic Data Parser
const apiData = [
    "25", "true", "false", "NaN", "                     ",
    "100px", "3.14", null, undefined
];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`\nItem ${i + 1}:`);
    console.log(`Original: ${stringValue}`);
    console.log(`Number: ${numberValue}`);
    console.log(`Boolean: ${booleanValue}`);
    console.log(`String: "${stringValue}"`);

    // Number.isNaN checks whether conversion produced NaN.
    // Whitespace-only strings are explicitly treated as invalid.
    const isWhitespace =
        typeof value === "string" && value.trim() === "";

    if (Number.isNaN(numberValue) || isWhitespace) {
        invalidNumbers.push(value);
        console.log("Status: INVALID numeric data");
    } else {
        validNumbers.push(numberValue);
        console.log("Status: VALID numeric data");
    }
}

console.log("\n--- FINAL REPORT ---");
console.log("Valid numbers:", validNumbers);
console.log("Invalid values:", invalidNumbers);
console.log("Valid count:", validNumbers.length);
console.log("Invalid count:", invalidNumbers.length);
