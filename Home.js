import React from "react";
import "./Home.css";
import img1 from "./Images/hero-img.png";
import img2 from "./Images/phone-04.jpg";
import img3 from "./Images/phone-06.jpg";
import Footer from "./Footer";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

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
          <Carousel.Item>
            <Carousel.Caption>
              <div className="cntofcarousel">
                <h3>50% off for your first shopping</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <button className="buttonofcarousel">Visit collection</button>
              </div>
            </Carousel.Caption>
            <img className="carosalimg" src={img1} alt="carosalimage" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carosalimg" src={img2} alt="carosalimage" />
            <Carousel.Caption>
              <div className="cntofcarousel">
                <h3>Grab Your first iphone as 13 pro </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="buttonofcarousel">Visit collection</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carosalimg" src={img3} alt="carosalimage" />
            <Carousel.Caption>
              <div className="cntofcarousel">
                <h3>40% off on Iphone 14 pro max</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
                <button className="buttonofcarousel">Visit collection</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* For the cart below the carousel */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
