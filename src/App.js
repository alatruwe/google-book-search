import React from "react";
import "./App.css";
import BookList from "./composition/Book";
import NavBar from "./composition/NavBar.js";
import SearchArea from "./composition/SearchArea.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "henry",
      bookListResults: {},
    };
  }
  render() {
    return (
      <main className="App">
        <NavBar />
        <SearchArea />
        <BookList
          searchTerm={this.state.searchTerm}
          bookListResults={this.state.bookListResults}
        />
      </main>
    );
  }
}

export default App;
