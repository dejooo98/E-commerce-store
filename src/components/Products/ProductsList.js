import React from 'react'
import Product from './Product'

const ProductsList = ({title, products}) => {
  
  
  
  return (
    <section className='section featured'>
        <div className="title">
          <h2>{title}</h2>
      </div>
      <div className='section-center featured-center'>
        {products.map((item)=>{
          return <Product {...item} key={item.id}/>
        })}
        
      </div>
    </section>
  )
}

export default ProductsList