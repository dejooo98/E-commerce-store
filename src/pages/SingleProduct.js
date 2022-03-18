import React from "react";
import { useParams } from "react-router-dom";
import ScrollBtn from "../components/ScrollBtn";
import Footer from "../components/Footer";
import { ProductContext } from "../Context/products";
import { useContext } from "react";

const SingleProduct = () => {
  const { id } = useParams();

  const { products } = React.useContext(ProductContext);
  const product = products.find((item) => item.id === parseInt(id));

  if (products.length === 0) {
    return <div className="loader"></div>;
  } else {
    const { image, name, price, description } = product;
    return (
      <div>
        <section className="single-product section">
          <div className="section-center single-product-center">
            <img src={image} className="single-product-img img" alt={name} />
            <article className="single-product-info">
              <div>
                <h2 className="single-product-title">{name}</h2>
                <p className="single-product-description">{description}</p>
                <span className="single-product-price">{price}</span>
                <p className="single-product-desc"></p>
                <button className="addToCartBtn btn">add to cart</button>
              </div>
            </article>
          </div>
        </section>
        <ScrollBtn />
        <Footer />
      </div>
    );
  }
};

export default SingleProduct;
