import React from 'react'
import {FaSearch, FaShoppingCart} from 'react-icons/fa'

const ProductsList = ({furnitures, title}) => {
  return (
    <section className='section featured'>
        <div className="title">
          <h2>{title}</h2>
      </div>
      <div className='section-center featured-center'>
        {/* single product  */}
        {furnitures.map((furniture)=>(
          <article className="product" key={furniture.id}>
            <div className="product-container">
              <img
                src={furniture.image}
                className="product-img img"
                alt={furniture.name}
              />

              <div className="product-icons">
                <a href="" className="product-icon">
                  <i><FaSearch/></i>
                </a>
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
        
         {/* end of single product  */}
      </div>
    </section>
  )
}

export default ProductsList