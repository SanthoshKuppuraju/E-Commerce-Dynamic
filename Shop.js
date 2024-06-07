import React, { useState } from "react";
import { products } from "./Product";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { add } from "./CartSlice";
import { toast, ToastContainer } from "react-toastify";
import "./Shop.css";

const Shop = () => {
  const shopProducts = products.filter((item) => item.category == "sofa");
  const [data, setData] = useState(shopProducts); // inital state of the products

  // to make the set of quantity available;
  const rawCategories = products.map((item) => item.category); //get all the categories from the api
  const settedCategories = new Set(rawCategories); // make the categories into a set
  const categories = Array.from(settedCategories); // changed the ssetted categories to array

  // to filter the by selecting the category
  const handelFilter = (event) => {
    setData(products.filter((item) => item.category == event.target.value));
  };

  // to dispatch the data while clicking the add to cart button
  const dispatchCart = useDispatch(); // to dispatch the product data to the slice
  const handelAdd = (item) => {
    dispatchCart(add(item));
    toast.success("Product has been added to cart");
  };

  // for the search bar
  const [qtyInputValue, setQtyInputValue] = useState("");
  const searchedProduct = data.filter((item) =>
    item.productName.toLowerCase().includes(qtyInputValue.toLowerCase())
  );

  const handleInputChange = (event) => {
    setQtyInputValue(event.target.value);
  };

  return (
    <>
      <div className="shopheader">
        <img src="https://images.pexels.com/photos/220116/pexels-photo-220116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <h1>Products</h1>
      </div>
      <p className="intermediateline">|</p>

      <select className="catagerydropdown" onChange={handelFilter}>
        {categories.map((item) => (
          <option>{item}</option>
        ))}
      </select>

      <div className="searchbar">
        <input
          class="form-control me-2"
          type="search"
          value={qtyInputValue}
          onChange={handleInputChange}
          placeholder="Search"
          aria-label="Search"
        />

        <img
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-strong-64.png"
          alt="search logo"
        />
      </div>

      {/* For the Products */}
      <div className="smilarproductscontainer">
        <div className="similarproducts">
          {searchedProduct && searchedProduct.length < 0
            ? data.map((item) => (
                <div className="similaritems">
                  <Link to={`/productpage/${item.id}`}>
                    <img src={item.imgUrl} className="similarproductsimg" />
                  </Link>
                  <h5>{item.productName}</h5>
                  <div className="similarstarscontainer">
                    <img src={item.star} className="similarproductstar" />
                    <img src={item.star} className="similarproductstar" />
                    <img src={item.star} className="similarproductstar" />
                    <img src={item.star} className="similarproductstar" />
                    <img src={item.star} className="similarproductstar" />
                  </div>
                  <h5>$ {item.price}</h5>

                  <button
                    onClick={() => {
                      handelAdd(item);
                    }}
                  >
                    +
                  </button>
                </div>
              ))
            : searchedProduct.map((item) => (
                <div className="similaritems">
                  <Link to={`/productpage/${item.id}`}>
                    <img src={item.imgUrl} className="similarproductsimg" />
                  </Link>
                  <h5>{item.productName}</h5>
                  <div className="similarstarscontainer">
                    <img src={item.star} className="similarproductstar" />
                    <img src={item.star} className="similarproductstar" />
                    <img src={item.star} className="similarproductstar" />
                    <img src={item.star} className="similarproductstar" />
                    <img src={item.star} className="similarproductstar" />
                  </div>
                  <h5>$ {item.price}</h5>

                  <button
                    onClick={() => {
                      handelAdd(item);
                    }}
                  >
                    +
                  </button>
                </div>
              ))}
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Shop;
