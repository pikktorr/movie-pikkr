import React from "react";

import "./item-card.styles.css";

export const ItemCard = ({ movie }) => {
  return (
    <div className="item-card">
      <div className="item-poster">
        <img src={movie.imgSrc} alt="" />
      </div>
      <p className="item-menu">...</p>
      <h3 className="item-title">{movie.itemTitle}</h3>
      <p className="item-date">{movie.itemDate}</p>
      <p className="item-genre">{movie.itemGenre}</p>
    </div>
  );
};
