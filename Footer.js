import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="foot1">
          <img src="https://cdn3.iconfinder.com/data/icons/basic-web-elements/48/basket-64.png" />
          <ul className="footerdiv1">
            <li className="foothead">Mart</li>
            <li>
              U Mart is a global e-commerce giant that offers a vast range of
              products, from books and electronics to groceries and apparel. It
              revolutionized online shopping with its user-friendly interface,
              extensive product selection, and fast delivery services.
            </li>
          </ul>
        </div>
        <div className="foot2">
          <ul className="foot2">
            <li className="foot2head">About Us</li>
            <li>Careers </li>
            <li>Our Stores</li>
            <li>Our cares</li>
            <li>Terms&Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="foot3">
          <ul className="foot3list">
            <li className="foot3head">Customer Care</li>
            <li>Help center </li>
            <li>How to buy </li>
            <li>Track your order</li>
            <li>Returns and Refunds</li>
            <li>Corparate &Bulk Booking </li>
          </ul>
        </div>
        <div className="foot4">
          <ul>
            <li className="foot4head">Contact Us</li>
            <li>
              #63, 1st Floor, 16th Main, 8th Cross BTM 1st Stage, BTM Layout,
              Bengaluru, Karnataka 560029
            </li>
            <li>Email:umart@gmail.com</li>
            <li>Phone:9876543210</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
