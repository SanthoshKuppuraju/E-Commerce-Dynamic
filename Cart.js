import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import Footer from "./Footer";
import { remove, incrementQuantity, decrementQuantity } from "./CartSlice";

const Cart = () => {
  const cartData = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
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
                {/* For the quantities */}
                <div className="quantitysection">
                  <div className="quantityrates">
                    <p>
                      ${item.price} * {item.quantity}
                    </p>
                    <p className="quntytotalprice">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                  <div className="quantitybuttons">
                    <button
                      className="quntbutton1"
                      onClick={() => {
                        handleIncrement(item.id);
                      }}
                    >
                      <img
                        src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/plus-64.png"
                        alt="addqunty"
                      />
                    </button>
                    <button
                      className="quntbutton2"
                      onClick={() => {
                        handleDecrement(item.id);
                      }}
                    >
                      <img
                        src="https://cdn4.iconfinder.com/data/icons/liny/24/minus-line-64.png"
                        alt="minusqunty"
                      />
                    </button>
                  </div>
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
        <h5> ${total}.00</h5>
      </div>

      <Footer />
    </>
  );
};
export default Cart;
