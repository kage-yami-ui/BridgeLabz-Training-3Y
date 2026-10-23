// Q7: Closure - return a function that multiplies by a chosen value

function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); 

const double = makeMultiplier(2);
console.log(double(5)); 

// Closure explanation:
// The inner function can still access `multiplier` after makeMultiplier has returned.
