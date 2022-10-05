import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (let product of cart) {
    quantity += product.quantity;
    total += product.price * product.quantity;
    shipping += product.shipping * product.quantity;
    console.log(total);
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: {total}</p>
      <p>Total Shipping: {shipping}</p>
      <p>Tax: {tax}</p>

      <p>Grand Total: {grandTotal}</p>
    </div>
  );
};

export default Cart;
