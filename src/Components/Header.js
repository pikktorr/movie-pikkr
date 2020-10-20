import React from "react";

import { AddMovie } from "./add-movie/add-movie.component";
import { SearchButton } from "./search-button/search-button.component";
import { SearchInput } from "./search-input/search-input.component";

import "./Header.styles.css";

import backgroundImage from "../assets/netflix_hero_img.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">moviePIKKR</div>
      <AddMovie />
      <h3 className="header-title">FIND YOUR MOVIE</h3>
      <form className="header-form">
        <SearchInput />
        <SearchButton />
      </form>
      <div className="background-image">
        <img src={backgroundImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
