import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProductsList from "../components/Products/ProductsList";
import {ProductContext} from '../Context/products'
const Home = () => {
  const {products} = React.useContext(ProductContext);

  return (
    <div>
      <section className="hero">
        <div className="hero-container">
          <h1 className="text-slanted">Future Store</h1>
          <h4 className="text-slanted">
            Working with Us was a dream. She was so knowledgeable and quickly
            understood the look I was going for. The whole process was easy and
            fast, and I’m in love with my new space.
          </h4>
          <Link to="/products">
            <div className="btn hero-btn text-slanted">shop now</div>
          </Link>
        </div>
      </section>
      
      <ProductsList title='Products' products={products}/>
      <Footer />
    </div>
  );
};

export default Home;
