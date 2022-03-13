import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Footer from "../components/Footer";

const SingleProduct = () => {
  const { id } = useParams();
  const {
    data: furniture,
    isPending,
    error,
  } = useFetch("http://localhost:7000/furnitures/" + id);
  return (
    <div>
      {isPending && <div className="loader"></div>}
      {error && <div>{error}</div>}
      {furniture && (
        <section className="single-product section">
          <div className="section-center single-product-center">
            <img
              src={furniture.image}
              className="single-product-img img"
              alt=""
            />
            <article className="single-product-info">
              <div>
                <h2 className="single-product-title">{furniture.name}</h2>
                <p className="single-product-description">
                  {furniture.description}
                </p>
                <span className="single-product-price">{furniture.price}</span>
                <p className="single-product-desc">{furniture.info}</p>
                <button className="addToCartBtn btn" data-id="id">
                  add to cart
                </button>
              </div>
            </article>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default SingleProduct;
