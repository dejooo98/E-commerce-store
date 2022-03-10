import React from 'react'
import {FaSearch, FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductsList = ({furnitures, title}) => {
  return (
    <section className='section featured'>
        <div className="title">
          <h2>{title}</h2>
      </div>
      <div className='section-center featured-center'>
        {furnitures.map((furniture)=>(
          <article className="product" key={furniture.id}>
            <div className="product-container">
              <img
                src={furniture.image}
                className="product-img img"
                alt={furniture.name}
              />

              <div className="product-icons">
                <Link to={`/furnitures/${furniture.id}`}>
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
              <h5 className="product-name">{furniture.name}</h5>
              <span className="product-price">{furniture.price}</span>
            </div>
          </article>
        ))}
        
      </div>
    </section>
  )
}

export default ProductsList