import React from "react";
import "./SearchBox.css";

class SearchBox extends React.Component {
  render() {
    return (
      <div className={"searchbox"}>
        <form>
          <label htmlFor="searchbox">Search:</label>
          <input type="text" name="search" id="searchbox" placeholder="henry" />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
