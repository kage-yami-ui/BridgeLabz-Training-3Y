// Q1: Callback greeting

function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

// Demonstrate callback flow
greetUser("Shishant", showEndMessage);
