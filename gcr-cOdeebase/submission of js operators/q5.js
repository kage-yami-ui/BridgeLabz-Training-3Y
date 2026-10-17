// Q5: Boolean Logic Access System

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    let isSecure =
        isAlarmOn &&
        isDoorLocked &&
        isWindowClosed &&
        isOwnerInside;

    if (isSecure) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }

    console.log(`Alarm is off: ${!isAlarmOn}`);
}

console.log("Test 1:");
checkSecurity();

console.log("Test 2:");
isWindowClosed = false;
checkSecurity();

console.log("Test 3:");
isWindowClosed = true;
isAlarmOn = false;
checkSecurity();

console.log("Test 4:");
isAlarmOn = true;
checkSecurity();

console.log(
    `At least one entry condition is true: ${isDoorLocked || isOwnerInside}`
);
