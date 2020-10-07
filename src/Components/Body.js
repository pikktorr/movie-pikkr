import React from "react";

import { ResultSort } from "./result-sort/result-sort.component";
import { ResultFilter } from "./result-filter/result-filter.component";
import { ResultCount } from "./result-count/result-count.component";
import { ItemList } from "./item-list/item-list.component";

const Body = () => {
  return (
    <div className="result-body">
      <ResultSort />
      <ResultFilter />
      <ResultCount />
      <ItemList />
    </div>
  );
};

export default Body;
