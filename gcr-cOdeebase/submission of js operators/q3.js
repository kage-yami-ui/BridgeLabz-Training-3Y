// Q3: Math Utility Dashboard

let x = 16.75;

let roundedValue = Math.round(x);

let squareRoot = Math.sqrt(x);

let powerValue = Math.pow(x, 3);

let randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`
Math Utility Dashboard
----------------------
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot}
Power (x^3): ${powerValue}
Random Number (10-50): ${randomNumber}
`);
