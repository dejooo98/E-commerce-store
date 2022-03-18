import React from 'react'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Product = ({image, name, id, price}) => {
  return (
    <article className="product">
      <div className="product-container">
        <img
          src={image}
          className="product-img img"
          alt={name}
        />

        <div className="product-icons">
          <Link to={`products/${id}`}>
            <div className="product-icon">
                <i><FaSearch/></i>
            </div>
          </Link>
          <button className="product-cart-btn product-icon" data-id="1">
            <i><FaShoppingCart/></i>
          </button>
        </div>
      </div>
      <div className='footer-price'>
        <h5 className="product-name">{name}</h5>
        <span className="product-price">${price}</span>
      </div>
    </article>
  )
}

export default Product