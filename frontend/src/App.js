import React from "react";
import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            <img
              className="brand"
              src="./images/Surabhi_Plywood.png"
              alt="brand"
            />
          </a>
        </div>
        <div>
          <a href="/signin">Sign In</a>
          <a href="/cart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <div key={product._id} className="card">
              <a href={`/products/${product._id}`}>
                <img
                  className="medium"
                  src={product.image}
                  alt={product.name}
                />
              </a>
              <div className="card-body">
                <a href={`/products/${product._id}`}>
                  <h2>{product.name}</h2>
                </a>
                <div className="rating">
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star-half-o"></i>
                  </span>
                </div>
                <div className="price">
                  <i className="fa fa-rupee"></i>
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
