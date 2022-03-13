import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";
import useFetch from "./useFetch";

const Products = () => {
  const {data: furnitures, isPending, error} = useFetch("http://localhost:7000/furnitures");

  return (
    <>
      <div className="breadcrumb-hero">
        <h3>
          {" "}
          <Link to="/">Home</Link> /<Link to="/products">Products</Link>{" "}
        </h3>
      </div>
      <section className="products">
          {/* filters  */}
          <div className="filters">
            <div className="filters-container">
              {/* categories */}
              <h5>Company</h5>
              <article className="companies">
                <button className="company-btn">all</button>
                <button className="company-btn">ikea</button>
                <button className="company-btn">marcos</button>
              </article>
            </div>
          </div>
          <div className="products-container">
            {/* {furnitures && (
            <Category furnitures={furnitures}/>)} */}
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
