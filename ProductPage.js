import React, { useState } from "react";
import { products } from "./Product";
import { useParams, Link } from "react-router-dom";
import "./ProductPage.css";
import Footer from "./Footer";
import { useDispatch } from "react-redux";
import { add } from "./CartSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductPage = () => {
  const { id } = useParams(); //for getting the product id which was from the home .

  const product = products.find((item) => item.id == id); // by the id from the use params we fliter that particular prd by filter method

  const reviewsCount = product.reviews.length; // for give the number to the reviews
  // to filter the simlar items of the clicked item
  const similardata = products.filter(
    (item) => item.category == product.category
  );
  // to filter the items from the similar data expext that clicked item
  const similarproducts = similardata.filter((item) => item.id !== id); // we filtering the project which was not equal to that particular id
  // to handel the add to cart ;;
  const [added, setAdded] = useState(false);

  const dispatch = useDispatch(); // to dispatch the product data to the slice
  const handelAdd = (product) => {
    dispatch(add(product));
    setAdded(true);
    toast.success("Product has been added to cart "); // for the message of product added in a cart
  };

  return (
    <>
      <div>
        <div className="singleproduct">
          <div className="headerportion">
            <img src="https://images.pexels.com/photos/220116/pexels-photo-220116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <h1>{product.productName}</h1>
          </div>

          <div className="producttop">
            <img className="productimg" src={product.imgUrl} />
            <div className="productdeatils">
              <h3>{product.productName}</h3>
              <div className="star">
                <img src={product.star} alt="star" />
                <img src={product.star} alt="star" />
                <img src={product.star} alt="star" />
                <img src={product.star} alt="star" />
                <img src={product.star} alt="star" />

                <span>{product.avgRating} rating</span>
              </div>
              <div className="priceline">
                <h3>$ {product.price}</h3>
                <p>category: {product.category}</p>
              </div>
              <p className="shortdesc">{product.shortDesc}</p>
              <input
                type="number"
                className="productquantity"
                placeholder="1"
              />

              <button
                className="addtocart"
                onClick={() => {
                  handelAdd(product);
                }}
              >
                {added ? "Added  ✓" : "Add to Cart"}
              </button>
              <ToastContainer />
            </div>
          </div>
          <div className="description">
            <div className="deschead">
              <h5>Description</h5>

              <p>Reviews({reviewsCount})</p>
            </div>
            <p>{product.description}</p>
          </div>
        </div>
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
      <Footer />
    </>
  );
};

export default ProductPage;
