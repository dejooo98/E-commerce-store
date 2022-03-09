import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from './Products'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <section class="hero">
          <div class="hero-container">
            <h1 class="text-slanted">Future Store</h1>
            <h3 class="text-slanted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</h3>
            <a class="btn hero-btn text-slanted">
              shop now
            </a>
          </div>
        </section>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Home