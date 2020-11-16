import React from "react";

function SearchBar() {
  return (
    <React.Fragment>
      <div class="searchBar">
        <input type="text" placeholder="Search.." name="search"></input>
        <button>TWEET!</button>
      </div>
    </React.Fragment>
  );
}

export default SearchBar;