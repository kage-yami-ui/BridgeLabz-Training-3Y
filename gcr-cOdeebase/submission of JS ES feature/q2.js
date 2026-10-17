//Q2 — Employee Bonus Calculator

"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
    try {
        // Validate the object and its required properties.
        if (
            employee === null ||
            typeof employee !== "object" ||
            !("name" in employee) ||
            !("salary" in employee) ||
            !("years" in employee)
        ) {
            throw new Error("Missing employee data or property.");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (
            !Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 ||
            years < 0
        ) {
            throw new Error("Invalid salary or years value.");
        }

        // Employees with more than 3 years get 10%; others get 5%.
        const bonus = years > 3 ? salary * 0.10 : salary * 0.05;
        const totalSalary = salary + bonus;

        console.log("\n--- Employee Details ---");
        console.log(`Name: ${employee.name}`);
        console.log(`Salary: ₹${salary.toFixed(2)}`);
        console.log(`Years of Service: ${years}`);
        console.log(`Bonus: ₹${bonus.toFixed(2)}`);
        console.log(`Total Salary: ₹${totalSalary.toFixed(2)}`);
    } catch (error) {
        console.log(`Employee processing error: ${error.message}`);
    }
}
