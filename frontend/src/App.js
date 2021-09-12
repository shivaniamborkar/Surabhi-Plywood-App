import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="/">
                <img src="./images/Surabhi_Plywood.png" alt="Surabhi Plywood" />
              </a>
            </div>
            <div>
              <a href="/signin">Sign In</a>
              <a href="/cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </a>
            </div>
          </header>
          <main>
            <Route path="/product/:id" component={ProductScreen} exact></Route>
            <Route path="/" component={HomeScreen} exact></Route>
          </main>
          <footer className="row center">All rights reserved</footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
