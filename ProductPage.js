import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "./Product";
import "./ProductPage.css";
import backgroung from "./Images/Productbg.png";
import Footer from "./Footer";

const ProductPage = () => {
  const { id } = useParams(); //for getting the product id which was from the home .
  const product = products.filter((item) => item.id == id); // by the id from the use params we fliter that particular prd by filter method
  const reviewsCount = product[0].reviews.length; // for give the number to the reviews
  const similarproducts = products.filter((item) => item.id !== id); // we filtering the project which was not equal to that particular id
  console.log(similarproducts);
  return (
    <>
      {product.map((item) => (
        <div className="singleproduct">
          <div className="headerportion">
            <img src={backgroung} />
            <h1>{item.productName}</h1>
          </div>

          <div className="producttop">
            <img className="productimg" src={item.imgUrl} />
            <div className="productdeatils">
              <h3>{item.productName}</h3>
              <div className="star">
                <img src={item.star} />
                <img src={item.star} />
                <img src={item.star} />
                <img src={item.star} />
                <img src={item.star} />
                <span>{item.avgRating} rating</span>
              </div>
              <div className="priceline">
                <h3>INR: {item.price}</h3>
                <p>category: {item.category}</p>
              </div>
              <p className="shortdesc">{item.shortDesc}</p>
              <p className="productqnt">1</p>
              <button className="addtocart">Add to Cart</button>
            </div>
          </div>
          <div className="description">
            <div className="deschead">
              <h5>Description</h5>

              <p>Reviews({reviewsCount})</p>
            </div>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      <div className="similarproducts">
        <h3>You Migth Also Like </h3>
        {/* for the similar products from the selected product  */}
        {similarproducts.map((item) => (
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

            <button>+</button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
