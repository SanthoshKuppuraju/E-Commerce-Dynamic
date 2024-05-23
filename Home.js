import React from "react";
import "./Home.css";
import Footer from "./Footer";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { SliderData } from "./Product.js";
import { serviceData } from "./Product.js";
import { discoutProducts } from "./Product.js";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
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
                <img src={item.imgUrl} />
              </div>
            ))}
          </div>
        </div>

        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/*  */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
