import React from "react";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";
import useFetch from "./useFetch";

const Home = () => {
  const {data: furnitures, isPending, error,} = useFetch("http://localhost:7000/furnitures");

  return (
    <div>
      <section className="hero">
        <div className="hero-container">
          <h1 className="text-slanted">Future Store</h1>
          <h4 className="text-slanted">
            Lorem Ipsum is simply dummy text of the printing
          </h4>
          <a className="btn hero-btn text-slanted">shop now</a>
        </div>
      </section>
      {error && <div>{error}</div>}
      {isPending && <div className="loader"></div>}
      {furnitures && (
        <ProductsList furnitures={furnitures} title="Our products" />
      )}
      <Footer />
    </div>
  );
};

export default Home;
