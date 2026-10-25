// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
class Cart {
  constructor(){this.items=[];}
  addItem(name,price,quantity){if(price<0||quantity<=0||!Number.isInteger(quantity))throw new Error("Price must be non-negative and quantity a positive integer.");this.items.push({name,price,quantity});}
  getTotal(){return this.items.reduce((total,item)=>total+item.price*item.quantity,0);}
  applyCoupon(code){const match=/^(SAVE|DISC)(\d{2})$/.exec(code);if(!match)return {valid:false,discountPercent:0,message:"Invalid coupon format."};const percent=Number(match[2]);if(percent>100)return {valid:false,discountPercent:0,message:"Discount cannot exceed 100%."};return {valid:true,discountPercent:percent,message:`Coupon applied: ${percent}% off.`};}
}
const cart=new Cart();cart.addItem("T-shirt",599,2);cart.addItem("Backpack",1299,1);
const subtotal=cart.getTotal(),coupon=cart.applyCoupon("SAVE20"),finalTotal=coupon.valid?subtotal*(1-coupon.discountPercent/100):subtotal;
console.log("Cart items:",cart.items);console.log(`Subtotal: ₹${subtotal.toFixed(2)}`);console.log(coupon.message);console.log(`Final total: ₹${finalTotal.toFixed(2)}`);
