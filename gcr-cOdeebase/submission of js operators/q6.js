// Q6: Event-Based Counter Simulation

let count = 0;

function increment() {
    count++;
    console.log(`After increment: ${count}`);

    function showCount() {
        console.log(`Current count inside nested function: ${count}`);
    }

    showCount();
}

function decrement() {
    count--;
    console.log(`After decrement: ${count}`);
}

console.log(`Initial count: ${count}`);

increment();
increment();
increment();

decrement();

console.log(`Final count: ${count}`);
