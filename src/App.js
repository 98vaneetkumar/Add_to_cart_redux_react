import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Product from "./components/Product";
import product from "./product.json";

function App() {
  return (
    <div className="App">
      <Cart />
      <div className="products-container">
        {product.products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
