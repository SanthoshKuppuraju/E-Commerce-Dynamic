import React from "react";
import "./Home.css";
import Footer from "./Footer";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { SliderData } from "./Product.js";
import { serviceData } from "./Product.js";
import { discoutProducts } from "./Product.js";
import { products } from "./Product.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "./CartSlice";

const Home = () => {
  // for carosal function
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  // Filtering the data for the new arraivals :
  const newArraivals = products.filter(
    (item) => item.category == "mobile" || item.category == "wireless"
  );
  // Filtering the data for the best Sales
  const bestSales = products.filter((item) => item.category == "sofa");
  // to dispatch the data while clicking rthe add to cart button
  const dispatch = useDispatch(); // to dispatch the product data to the slice
  const handelAdd = (item) => {
    dispatch(add(item));
  };

  return (
    <>
      <div>
        {/* For the carousel part  */}

        <Carousel
          className="carousel"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {SliderData.map((item) => (
            <Carousel.Item>
              <Carousel.Caption>
                <div className="cntofcarousel">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button className="buttonofcarousel">Visit collection</button>
                </div>
              </Carousel.Caption>

              <img className="carosalimg" src={item.cover} alt="carosalimage" />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* For the sevices*/}
        <div className="cardsundercar">
          {serviceData.map((item) => (
            <div className="card" style={{ backgroundColor: item.bg }}>
              <center>
                <img src={item.icon} />
                <h5>{item.title} </h5>
                <p>{item.subtitle}</p>
              </center>
            </div>
          ))}
        </div>

        {/* Big Discount */}
        <div className="bigdiscount">
          <h1>Big Discount</h1>
          <div className="bgproducts">
            {discoutProducts.map((item) => (
              <div className="bgitems">
                <p>{item.discount}% Off</p>
                <Link to={`/productpage/${item.id}`}>
                  <img src={item.imgUrl} className="bgproductsimg" />
                </Link>
                <h5>{item.productName}</h5>
                <div className="bgstarscontainer">
                  <img src={item.star} className="bgproductsstar" />
                  <img src={item.star} className="bgproductsstar" />
                  <img src={item.star} className="bgproductsstar" />
                  <img src={item.star} className="bgproductsstar" />
                  <img src={item.star} className="bgproductsstar" />
                </div>
                <h5>INR: {item.price}</h5>

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
        {/* New Arrivals  */}
        <div className="newarrcontainer">
          <div className="newarraivals">
            <h1>New Arraivals </h1>
            <div className="bgproducts">
              {newArraivals.map((item) => (
                <div className="bgitems">
                  <Link to={`/productpage/${item.id}`}>
                    <img src={item.imgUrl} className="bgproductsimg" />
                  </Link>
                  <h5>{item.productName}</h5>
                  <div className="bgstarscontainer">
                    <img src={item.star} className="bgproductsstar" />
                    <img src={item.star} className="bgproductsstar" />
                    <img src={item.star} className="bgproductsstar" />
                    <img src={item.star} className="bgproductsstar" />
                    <img src={item.star} className="bgproductsstar" />
                  </div>
                  <h5>INR: {item.price}</h5>

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
        </div>
        {/* Best sales */}
        <div className="bigdiscount">
          <h1>Best Sales</h1>
          <div className="bgproducts">
            {bestSales.map((item) => (
              <div className="bgitems">
                <Link to={`/productpage/${item.id}`}>
                  <img src={item.imgUrl} className="bgproductsimg" />
                </Link>
                <h5>{item.productName}</h5>
                <div className="bgstarscontainer">
                  <img src={item.star} className="bgproductsstar" />
                  <img src={item.star} className="bgproductsstar" />
                  <img src={item.star} className="bgproductsstar" />
                  <img src={item.star} className="bgproductsstar" />
                  <img src={item.star} className="bgproductsstar" />
                </div>
                <h5>INR: {item.price}</h5>

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
        {/* Added footer component to the home page */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
