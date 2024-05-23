import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const color = {
    color: "black",
  };
  return (
    <>
      <div className="header">
        <Link to="/home">
          <img
            className="logo"
            src="https://cdn3.iconfinder.com/data/icons/basic-web-elements/48/basket-64.png"
          />
        </Link>
        <span className="appname">MART</span>

        <ul className="nav justify-content-end">
          <li class="nav-item">
            <Link
              to="/home"
              class="nav-link active"
              aria-current="page"
              style={color}
            >
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/Shop" class="nav-link" style={color}>
              Shop
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/cart" class="nav-link" style={color}>
              Cart
            </Link>
          </li>

          <li class="nav-item">
            <Link to="/cart" href="#">
              <img
                className="cartimg"
                src="https://cdn2.iconfinder.com/data/icons/neutro-essential/32/cart-64.png"
              />
            </Link>
          </li>
          <li className="tolitmncrt">0</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
