//Q3 — Transaction Validator

"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (const transaction of transactions) {
    try {
        // Detect null before accessing any properties.
        if (transaction === null) {
            throw new Error("NULL_ENTRY: Transaction is null.");
        }

        if (
            !Object.hasOwn(transaction, "id") ||
            !Object.hasOwn(transaction, "amount") ||
            transaction.id == null ||
            transaction.amount == null
        ) {
            throw new Error("MISSING_DATA: Missing id or amount.");
        }

        if (
            typeof transaction.amount !== "number" ||
            !Number.isFinite(transaction.amount)
        ) {
            throw new Error("INVALID_AMOUNT: Amount must be numeric.");
        }

        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT: Amount cannot be negative.");
        }

        valid.push(transaction);
        console.log(`Valid transaction: ID ${transaction.id}`);
    } catch (error) {
        const message = error.message;

        let category = "OTHER_ERROR";

        if (message.startsWith("NULL_ENTRY:")) {
            category = "NULL_ENTRY";
        } else if (message.startsWith("MISSING_DATA:")) {
            category = "MISSING_DATA";
        } else if (message.startsWith("NEGATIVE_AMOUNT:")) {
            category = "NEGATIVE_AMOUNT";
        } else if (message.startsWith("INVALID_AMOUNT:")) {
            category = "INVALID_AMOUNT";
        }

        invalid.push({
            transaction,
            category,
            message
        });

        console.log(`Invalid transaction: ${category}`);
        console.log(`Reason: ${message}`);
    }
}

console.log("\n--- TRANSACTION REPORT ---");
console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log("Successful count:", valid.length);
console.log("Failed count:", invalid.length);
