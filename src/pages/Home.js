import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductsList from '../components/ProductsList'

const Home = () => {
  
  return (
    <div>
        <Navbar/>
        <section class="hero">
          <div class="hero-container">
            <h1 class="text-slanted">Future Store</h1>
            <h2 class="text-slanted">Lorem Ipsum is simply dummy text of the printing</h2>
            <a class="btn hero-btn text-slanted">
              shop now
            </a>
          </div>
        </section>
        <ProductsList/>
        <Footer/>
    </div>
  )
}

export default Home