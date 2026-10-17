let total = 12000;
let discountPercentage = 0;

if (total >= 10000) {
    discountPercentage = 25;
} else if (total >= 5000) {
    discountPercentage = 15;
} else if (total >= 2000) {
    discountPercentage = 5;
}

let discountAmount = total * discountPercentage / 100;
let finalPrice = Math.round(total - discountAmount);

console.log("Original Total: ₹" + total);
console.log("Discount: " + discountPercentage + "%");
console.log("Final Price: ₹" + finalPrice);