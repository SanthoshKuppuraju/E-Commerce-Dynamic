import React from "react";
import { products } from "./Product";
import { useParams, Link } from "react-router-dom";
import "./ProductPage.css";
import backgroung from "./Images/Productbg.png";
import Footer from "./Footer";

const ProductPage = () => {
  const { id } = useParams(); //for getting the product id which was from the home .
  const product = products.filter((item) => item.id == id); // by the id from the use params we fliter that particular prd by filter method
  const reviewsCount = product[0].reviews.length; // for give the number to the reviews
  // to filter the simlar items of the clicked item
  const similardata = products.filter(
    (item) => item.category == product[0].category
  );
  // to filter the items from the similar data expext that clicked item
  const similarproducts = similardata.filter((item) => item.id !== id); // we filtering the project which was not equal to that particular id

  return (
    <>
      <div>
        {product.map((item) => (
          <div className="singleproduct">
            <div className="headerportion">
              <img src="https://images.pexels.com/photos/220116/pexels-photo-220116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
      </div>
      {/* For the you might also like portion */}
      <h3 className="similarproductsheading">You Migth Also Like </h3>
      <div className="smilarproductscontainer">
        <div className="similarproducts">
          {similarproducts.map((item) => (
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

export default ProductPage;
