import React from "react";
import CartItem from "../components/Cart/CartItem";
import EmptyCart from "../components/Cart/EmptyCart";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cart";
import Footer from "../components/Footer";

const Cart = () => {
  const { cart, total } = React.useContext(CartContext);
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <>
      <div className="breadcrumb-hero">
        <h3>Your Cart</h3>
      </div>
      <section className="cart-items section">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <h2>total : ${total}</h2>
        <div className="link-container">
          <Link to="/products">
            <button className="continueBtn btn">Continue shopping</button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
