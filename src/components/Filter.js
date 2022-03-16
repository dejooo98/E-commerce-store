import React from "react";

const Filter = () => {
  return (
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
  );
};

export default Filter;
