// Q9 – Debugging the Event Loop

/*
Predicted output:
Script start
Script end
Promise callback
Timeout callback

The synchronous statements execute first. Promise.then() schedules a
microtask, while setTimeout() schedules a macrotask. After the current
script finishes, JavaScript drains microtasks before running timer callbacks.
*/
console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");
