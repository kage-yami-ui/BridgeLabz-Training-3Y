// Q8: Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let originalTotal = cart.reduce(function(total, product) {
    return total + product.price;
}, 0);

let discountedSubtotal = 0;

console.log("Dynamic Discount Report");
console.log("-----------------------");

for (let product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10; 
    } else if (product.category === "fashion") {
        discountRate = 0.05; 
    }

    let discountAmount = product.price * discountRate;
    let finalPrice = product.price - discountAmount;

    discountedSubtotal += finalPrice;

    console.log(`Item: ${product.item}`);
    console.log(`Original Price: ₹${product.price}`);
    console.log(`Discount: ${discountRate * 100}%`);
    console.log(`Final Price: ₹${finalPrice}`);
    console.log("-----------------------");
}

let extraDiscount = 0;

if (originalTotal > 50000) {
    extraDiscount = discountedSubtotal * 0.05;
}

let finalTotal = discountedSubtotal - extraDiscount;

console.log(`Original Cart Total: ₹${originalTotal}`);
console.log(`Subtotal After Discounts: ₹${discountedSubtotal}`);
console.log(`Extra Discount: ₹${extraDiscount}`);
console.log(`Final Cart Total: ₹${finalTotal}`);
