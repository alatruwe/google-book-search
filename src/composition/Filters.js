import React from "react";
import "./Filters.css";

class Filters extends React.Component {
  render() {
    return (
      <div className={"filters"}>
        <form className={"filter"}>
          <div>
            <p>Print Type:</p>
            <select name="print-type" size="1">
              <option value="all">All</option>
              <option value="free">Free e-book</option>
            </select>
          </div>
          <div>
            <p>Book Type:</p>
            <select name="print-type" size="1">
              <option value="no-filter">No Filter</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default Filters;
