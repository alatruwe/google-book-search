import React from "react";
import SearchBox from "./SearchBox.js";
import Filters from "./Filters.js";

class SearchArea extends React.Component {
  render() {
    return (
      <div>
        <SearchBox />
        <Filters />
      </div>
    );
  }
}

export default SearchArea;
