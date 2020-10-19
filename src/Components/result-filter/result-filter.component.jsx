import React from "react";

import "./result-filter.styles.css";

export const ResultFilter = () => {
  return (
    <div className="result-filter">
      <ul className="result-list">
        <li className="filter-all filtered">All</li>
        <li className="filter-documentary">Documentary</li>
        <li className="filter-comedy">Comedy</li>
        <li className="filter-horror">Horror</li>
        <li className="filter-crime">Crime</li>
      </ul>
    </div>
  );
};
