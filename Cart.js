import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import Footer from "./Footer";
import { remove } from "./CartSlice";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <div>
        {cartData && cartData.length > 0 ? (
          cartData.map((item) => (
            <div className="wholecart">
              <div className="cartproduct">
                <div className="cartdetails">
                  <img className="cartproductimg" src={item.imgUrl} />
                  <h5>{item.productName}</h5>
                  <button
                    className="removebutton"
                    onClick={() => {
                      handleRemove(item.id);
                    }}
                  >
                    <img
                      src="https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded-02-64.png"
                      alt="remove button "
                    />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="wholecart">
            <div className="cartproduct">
              <div className="cartdetails">
                <h4 className="emptycart">Your cart is empty</h4>
                <p></p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="cartsummary">
        <h4>Cart Summary</h4>
        <p>Total price:</p>
        <h5> INR: 1111.00</h5>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
