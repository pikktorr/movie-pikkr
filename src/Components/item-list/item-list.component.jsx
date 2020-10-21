import React from "react";
import PropTypes from "prop-types";

import { ItemCard } from "../item-card/item-card.component";
import "./item-list.styles.css";

const Movie = {
  imgSrc:
    "https://images-na.ssl-images-amazon.com/images/I/71q-7%2BKrvLL._AC_SX679_.jpg",
  itemTitle: "Joker",
  itemDate: 2019,
  itemGenre: "Drama, Thriller",
};

export const ItemList = () => {
  return (
    <div className="item-list">
      <ItemCard movie={Movie} />
      <ItemCard movie={Movie} />
      <ItemCard movie={Movie} />
    </div>
  );
};

ItemList.propTypes = {
  movie: PropTypes.shape({
    imgSrc: PropTypes.string,
    itemTitle: PropTypes.string,
    itemDate: PropTypes.number,
    itemGenre: PropTypes.string,
  }),
};
