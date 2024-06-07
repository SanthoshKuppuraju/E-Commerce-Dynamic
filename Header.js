import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const color = {
    color: "black",
  };
  // to show the total items in the cart
  const lengthOfCart = useSelector((state) => state.cart.items);

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
          <li className="nav-item">
            <Link to="/Shop" className="nav-link" style={color}>
              Shop
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/cart" className="nav-link" style={color}>
              Cart
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/cart" href="#">
              <img
                className="cartimg"
                src="https://cdn2.iconfinder.com/data/icons/neutro-essential/32/cart-64.png"
              />
            </Link>
          </li>
          <li className="tolitmncrt">{lengthOfCart.length}</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
