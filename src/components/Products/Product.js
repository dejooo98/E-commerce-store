import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/products";

const Product = ({ image, name, id, price }) => {
  const {loading} = React.useContext(ProductContext);
  if(loading){
    return (
      <div className="loader"></div>
    )
  }
  return (
    <article className="product">
      <div className="product-container">
        <img src={image} className="product-img img" alt={name} />

        <div className="product-icons">
          <Link to={`products/${id}`}>
            <div className="product-icon">
              <i>
                <FaSearch />
              </i>
            </div>
          </Link>
        </div>
      </div>
      <div className="footer-price">
        <h5 className="product-name">{name}</h5>
        <span className="product-price">${price}</span>
      </div>
    </article>
  );
};

export default Product;
