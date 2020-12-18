import React from "react";
import Book from "./Book.js";

class BookList extends React.Component {
  render() {
    return (
      <div>
        <Book />
        <Book />
      </div>
    );
  }
}

export default BookList;
