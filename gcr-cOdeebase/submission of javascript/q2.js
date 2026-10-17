let userName = "Shishant";
let age = 21;
let isStudent = true;
let subjects = ["Java", "JavaScript", "Python"];
let student = { name: "Shishant", age: 21 };
let address = null;
let result;

let report = [
    { Label: "Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    {
        Label: "Subjects",
        Value: subjects.join(", "),
        Type: Array.isArray(subjects) ? "array" : typeof subjects
    },
    { Label: "Student Object", Value: JSON.stringify(student), Type: typeof student },
    { Label: "Address", Value: address, Type: "null" },
    { Label: "Result", Value: result, Type: typeof result }
];

console.table(report);