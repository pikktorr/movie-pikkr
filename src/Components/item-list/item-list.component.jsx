import React from "react";

import { ItemCard } from "../item-card/item-card.component";
import "./item-list.styles.css";

export const ItemList = () => {
  return (
    <div className="item-list">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
};
