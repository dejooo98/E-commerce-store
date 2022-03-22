import React from 'react'
import CartItem from '../components/Cart/CartItem';
import EmptyCart from '../components/Cart/EmptyCart';
import { CartContext } from '../Context/cart';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, total } = React.useContext(CartContext);
    if (cart.length === 0) {
        return <EmptyCart />;
    }
  return (
    <>
      <section className="cart-items section">
        <h2>your cart</h2>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
        <div className='link-container'>
          <Link to='/products'>
            <button className='btn addToCartBtn'>Continue Shopping</button>
          </Link>
        </div>
        <h2>total : <span>${total}</span> </h2>
      </section>
      <Footer/>
    </>
    
  )
  
}
export default Cart