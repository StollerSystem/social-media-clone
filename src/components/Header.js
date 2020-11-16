import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <React.Fragment>
      <div class="row navBar">
        <div class="col-md-6">
          <NavBar  />
        </div>
        <div class="col-md-6">
          <SearchBar />
        </div>       
      </div>
      <hr/>
    </React.Fragment>
  );
}

export default Header;