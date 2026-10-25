// Q1: E-Commerce Product Manager
class Product {
  constructor(id, name, price, category) {
    Object.assign(this, { id, name, price, category });
  }
  applyDiscount(percent) {
    if (percent < 0 || percent > 100) throw new Error("Discount must be 0–100.");
    this.price *= 1 - percent / 100;
  }
  getDetails() {
    return `ID: ${this.id} | ${this.name} | ₹${this.price.toFixed(2)} | ${this.category}`;
  }
}
const products = [
  new Product(1, "Keyboard", 850, "Accessories"),
  new Product(2, "Monitor", 7500, "Electronics"),
  new Product(3, "Headphones", 1500, "Accessories")
];
products[1].applyDiscount(10);
console.log("All products:");
products.forEach(p => console.log(p.getDetails()));
console.log("\nProducts over ₹1000:");
products.filter(p => p.price > 1000).forEach(p => console.log(p.getDetails()));
