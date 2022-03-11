import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";
import useFetch from "./useFetch";

const Products = () => {
  const {data: furnitures, isPending, error,} = useFetch("http://localhost:7000/furnitures");
  return (
    <>
      <div className="breadcrumb-hero">
        <h3>
          {" "}
          <Link to="/">Home</Link> /<Link>Products</Link>{" "}
        </h3>
      </div>
      <section className="products">
          {/* filters  */}
          <div className="filters">
            <div className="filters-container">
              {/* search */}
              <form className="input-form">
                <input type="text" className="search-input" placeholder="search..." />
              </form>
              {/* categories */}
              <h5>Company</h5>
              <article className="companies">
                <button className="company-btn">all</button>
                <button className="company-btn">ikea</button>
                <button className="company-btn">marcos</button>
              </article>
              <span className="price-value">Value : $80</span>
            </div>
          </div>
          <div class="products-container">
            {error && <div>{error}</div>}
            {isPending && <div className="loader"></div>}
            {furnitures && (
            <ProductsList furnitures={furnitures} title="All products" />
            )}
          </div>
      </section>
       <Footer />
      
    </>
  );
};

export default Products;
