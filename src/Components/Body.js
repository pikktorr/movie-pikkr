import React from "react";

import { ResultSort } from "./result-sort/result-sort.component";
import { ResultFilter } from "./result-filter/result-filter.component";
import { ResultCount } from "./result-count/result-count.component";
import { ItemList } from "./item-list/item-list.component";

import "./Body.styles.css";

const Body = () => {
  return (
    <div className="result-body">
      <ResultFilter />
      <ResultSort />
      <hr className="result-line" />
      <ResultCount />
      <ItemList />
    </div>
  );
};

export default Body;
