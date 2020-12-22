import React from "react";
import Book from "./Book.js";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "henry",
      bookListResults: [],
    };
  }

  componentDidMount() {
    const baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    const apiKey = "";
    const searchTerm = this.state.searchTerm;
    const url = baseUrl + searchTerm + "&" + apiKey;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const volumes = data.items;
        const volumesItem = Object.keys(volumes).map(
          (key) => volumes[key].selfLink
        );
        console.log(data);
        console.log(volumes);
        console.log(volumesItem);
        this.setState({
          bookListResults: volumesItem,
        });
      });
  }

  render() {
    return <Book bookListResults={this.state.bookListResults} />;
  }
}

export default BookList;
