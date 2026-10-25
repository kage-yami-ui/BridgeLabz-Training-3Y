// Q2 – Task Scheduler: Micro vs Macro Challenge
console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

/*
Expected output:
Start
Synchronous log
End
Promise callback (microtask)
setTimeout callback (macrotask)

Explanation:
Synchronous statements run first. Once the current call stack is empty,
JavaScript drains the microtask queue (Promise callbacks) before processing
the macrotask queue (the setTimeout callback).
*/
