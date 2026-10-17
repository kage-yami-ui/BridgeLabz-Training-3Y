// Q9 — JSON Audit


"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18Users = [];

for (let i = 0; i < rawData.length; i++) {
    const lineNumber = i + 1;

    try {
        // Convert the JSON string to a JavaScript object.
        const parsed = JSON.parse(rawData[i]);

        // Check required properties.
        if (
            !Object.hasOwn(parsed, "user") ||
            !Object.hasOwn(parsed, "age")
        ) {
            throw new Error("Missing required key: user or age.");
        }

        // Validate the user's name.
        if (
            typeof parsed.user !== "string" ||
            parsed.user.trim() === ""
        ) {
            throw new Error("Invalid user name.");
        }

        // Convert age to a number and validate it.
        const age = Number(parsed.age);

        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Age must be a valid nonnegative number.");
        }

        const userRecord = {
            ...parsed,
            age: age
        };

        cleanData.push(userRecord);

        if (age < 18) {
            under18Users.push(userRecord);
        }

        console.log(`Line ${lineNumber}: Valid JSON record.`);
    } catch (error) {
        errors.push({
            line: lineNumber,
            message: error.message
        });

        console.log(`Line ${lineNumber}: ERROR - ${error.message}`);
    }
}

console.log("\n--- JSON AUDIT REPORT ---");
console.log("Clean data:", cleanData);
console.log("Errors:", errors);
console.log("Valid records:", cleanData.length);
console.log("Invalid records:", errors.length);
console.log("Users under 18:", under18Users);



// The exact JSON parser error text may vary by Node.js version.
// The final clean array contains:

[
    { user: "Alex", age: 25 },
    { user: "Mina", age: 22 }
]