import React from "react";

import { AddMovie } from "./add-movie/add-movie.component";
import { SearchButton } from "./search-button/search-button.component";
import { SearchInput } from "./search-input/search-input.component";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">moviePIKKR</div>
      <AddMovie />
      <h3>FIND YOUR MOVIE</h3>
      <form>
        <SearchInput />
        <SearchButton />
      </form>
    </div>
  );
};

export default Header;
