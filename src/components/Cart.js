import React from "react";
import { useSelector } from "react-redux";
import { getItemSelector } from "../redux/slices/cartSlice";
function Cart() {
  const items = useSelector(getItemSelector);
  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <div
      className="navbar navbar-dark"
      style={{ backgroundColor: "GrayText", marginTop: "-20px" }}
    >
      <div className="container">
        <span className="navbar-brand mb-0 h1">
          <h2>Your Cart</h2>
        </span>
        <div className="text-white">
          <h3>
            Total items: {items.length} (Rs. {total})
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;
