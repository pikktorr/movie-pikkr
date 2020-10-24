import React from "react";

import { AddMovieButton } from "../../components/add-movie-button/add-movie-button.component";
import { SearchButton } from "../../components/search-button/search-button.component";
import { SearchInput } from "../../components/search-input/search-input.component";

import "./header.styles.css";

import backgroundImage from "../../assets/netflix_hero_img.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">moviePIKKR</div>
      <AddMovieButton />
      <h3 className="header-title">Find your movie</h3>
      <form className="header-form">
        <SearchInput />
        <SearchButton />
      </form>
      <div className="background-image">
        <img src={backgroundImage} alt="" />
      </div>
    </header>
  );
};

export default Header;
