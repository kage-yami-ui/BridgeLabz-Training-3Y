// Q4: Array Performance Analyzer

let scores = Array.from({ length: 8 }, function() {
    return Math.floor(Math.random() * 71) + 30;
});

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

let totalScore = scores.reduce(function(total, score) {
    return total + score;
}, 0);

let averageScore = totalScore / scores.length;

let passedStudents = scores.filter(function(score) {
    return score >= 50;
});

let studentScores = scores.map(function(score, index) {
    return `Student ${index + 1}: ${score}`;
});

console.log("Array Performance Analyzer");
console.log("--------------------------");
console.log(studentScores.join("\n"));
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Students Passed: ${passedStudents.length}`);
console.log(`Students Failed: ${scores.length - passedStudents.length}`);
