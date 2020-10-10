import React from "react";

import "./item-card.styles.css";

export const ItemCard = () => {
  return (
    <div className="item-card">
      <div className="item-poster">
        <img
          src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351165.jpg?c=2"
          alt=""
        />
      </div>
      <p className="item-menu">...</p>
      <h3 className="item-title">Joker</h3>
      <p className="item-date">2019</p>
      <p className="item-genre">Drama, Thriller</p>
    </div>
  );
};
