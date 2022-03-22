import React from "react";
import { useHistory, useParams } from "react-router-dom";
import ScrollBtn from "../components/ScrollBtn";
import Footer from "../components/Footer";
import { ProductContext } from "../Context/products";
import { CartContext } from "../Context/cart";


const SingleProduct = () => {
  const { id } = useParams();

  const { products, loading} = React.useContext(ProductContext);
   const { addToCart } = React.useContext(CartContext);

  const product = products.find((item) => item.id === parseInt(id));
  let history = useHistory();
  if(loading){
    return (
      <div className="loader"></div>
    )
  }

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
                <button className="addToCartBtn btn" 
                  onClick={() => {
                  addToCart(product);
                  history.push("/cart");
                }}
                >
                  add to cart
                </button>
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
