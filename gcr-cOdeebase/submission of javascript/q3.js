let expenses = {
    food: 3000,
    travel: 1500,
    rent: 6000,
    bills: 1000,
    leisure: 500
};

let total = 0;

for (let category in expenses) {
    total += expenses[category];
}

let average = total / Object.keys(expenses).length;

total *= 1.10;

console.log("Total before tax: ₹" + (total / 1.10).toFixed(2));
console.log("Average expense: ₹" + average.toFixed(2));
console.log("Final amount after tax: ₹" + total.toFixed(2));