import React from "react";
import { addItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
function Product(props) {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img
        src={props.images}
        className="card-img-top"
        alt={props.title}
        style={{ width: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">Rs. {props.price}</p>
        <button
          className="btn btn-primary"
          onClick={(e) =>
            dispatch(addItem({ name: props.title, price: props.price }))
          }
        >
          <h3>Add to cart</h3>
        </button>
      </div>
    </div>
  );
}

export default Product;
