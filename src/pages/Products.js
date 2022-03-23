import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import ProductsList from "../components/Products/ProductsList";
import { ProductContext } from "../Context/products";

const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <div className="breadcrumb-hero">
        <h3>
          {" "}
          <Link to="/">Home</Link> /<Link to="/products">Products</Link>{" "}
        </h3>
      </div>
      <section className="products">
        <Filter />
        <div className="products-container">
          <ProductsList products={products} title="Our products" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
