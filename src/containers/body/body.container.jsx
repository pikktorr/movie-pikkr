import React from "react";

import { ResultSort } from "../../components/result-sort/result-sort.component";
import { ResultFilter } from "../../components/result-filter/result-filter.component";
import { ResultCount } from "../../components/result-count/result-count.component";
import { ItemList } from "../../components/item-list/item-list.component";

import "./body.styles.css";

const Body = () => {
  return (
    <section className="result-body">
      <ResultFilter />
      <ResultSort />
      <hr className="result-line" />
      <ResultCount />
      <ItemList />
    </section>
  );
};

export default Body;
