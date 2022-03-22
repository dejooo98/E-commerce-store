import React from 'react'
import { useContext } from 'react';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { CartContext } from '../../Context/cart';

const CartItem = ({id, image, name, price,amount}) => {
    const { removeItem, increaseAmount, decreaseAmount } = useContext(CartContext);
  return (
    <article className="cart-item">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h5>${price}</h5>
        <button
          className="cart-btn remove-btn"
          onClick={() => {
            removeItem(id);
          }}
        >
          <FaTrash/>
        </button>
      </div>
      <div className='amount-btns'>
        <button
          className="cart-btn amount-btn"
          onClick={() => {
            decreaseAmount(id, amount);
          }}
        >
          <FaMinus />
        </button>
        <p className="item-amount">{amount}</p>
        <button
          className="cart-btn amount-btn"
          onClick={() => {
            increaseAmount(id);
          }}
        >
          <FaPlus />
        </button>
      </div>
    </article>
  )
}

export default CartItem