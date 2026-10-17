// Q1: Scope Conflict Resolver

let bonus = 5000;

function calculateSalary(isPermanent) {s
    let salary = 40000;
    let totalSalary = salary;

    if (isPermanent === true) {
        totalSalary = salary + bonus;
    }

    console.log(`Permanent Employee: ${isPermanent}`);
    console.log(`Base Salary: ₹${salary}`);
    console.log(`Bonus: ₹${isPermanent ? bonus : 0}`);
    console.log(`Total Salary: ₹${totalSalary}`);
}

calculateSalary(true);

calculateSalary(false);

console.log(`Global Bonus: ₹${bonus}`);

bonus = 6000;
console.log(`Updated Global Bonus: ₹${bonus}`);
