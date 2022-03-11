import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="breadcrumb-hero">
      <h3>
        {" "}
        <Link to="/">Home</Link> /<Link>Products</Link>{" "}
      </h3>
    </div>
  );
};

export default Products;
