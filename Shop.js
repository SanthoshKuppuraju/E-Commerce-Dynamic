import React, { useState } from "react";
import "./Shop.css";
import { products } from "./Product";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Shop = () => {
  const [data, setData] = useState(products); // inital state of the products
  //   const categorys = data.map((item) => item.category);
  const categories = data.map((item) => ({ category: item.category }));
  const midstage = categories;
  const category = new Set(midstage);

  console.log(categories);

  return (
    <>
      <div className="shopheader">
        <img src="https://images.pexels.com/photos/220116/pexels-photo-220116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <h1>Products</h1>
      </div>
      <p className="intermediateline">|</p>

      <select className="catagerydropdown">
        <option> Filter by category </option>
        {/* {array.map((item) => (
          <option>{item}</option>
        ))} */}
      </select>

      {/* Search Bar */}
      <div className="searchbar">
        <input
          class="form-control me-2"
          type="search"
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
          {data.map((item) => (
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
              <h5>INR: {item.price}</h5>

              <button>+</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
