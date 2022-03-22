import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cart";

export default function CartLink() {
  const { cartItems } = React.useContext(CartContext);

  return (
      <Link to="/cart">
    <div className="cart-link-container">
      
            <button type="btn" className="cart">
                <FaShoppingCart />
            </button>
       
      <span className="cart-link-total">{cartItems}</span>
    </div>
     </Link>
  );
}
