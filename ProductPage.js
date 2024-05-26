import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./Product";
import "./ProductPage.css";
import backgroung from "./Images/Productbg.png";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.filter((item) => item.id == id);

  return (
    <>
      {product.map((item) => (
        <div>
          <div className="headerportion">
            <img src={backgroung} />
            <h1>{item.productName}</h1>
          </div>
          <div>
            <img src={item.imgUrl} />
            <div></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductPage;
