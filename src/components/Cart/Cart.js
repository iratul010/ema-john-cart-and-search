import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  return (
    <div>
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
    </div>
  );
};

export default Cart;
