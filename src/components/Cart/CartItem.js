import React from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { CartContext } from "../../Context/cart";
export default function CartItem({ id, image, name, price, category, amount }) {
  const { removeItem, increaseAmount, decreaseAmount } =
    React.useContext(CartContext);
  return (
    <>
      <article className="cart-item">
        <div className="info">
          <img className="info-img" src={image} alt={name} />
          <div className="descr">
            <h4 className="item-name">{name}</h4>
            <h4 className="item-name">{category}</h4>
            <h5 className="item-price">${price}</h5>
          </div>
        </div>
        <div className="inc_dec">
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
          <button
            className="cart-btn remove-btn"
            onClick={() => {
              removeItem(id);
            }}
          >
            <FaTrash />
          </button>
        </div>
      </article>
    </>
  );
}
