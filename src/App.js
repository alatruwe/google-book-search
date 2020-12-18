import React from "react";
import "./App.css";
import NavBar from "./composition/NavBar.js";
import SearchArea from "./composition/SearchArea.js";

class App extends React.Component {
  render() {
    return (
      <main className="App">
        <NavBar />
        <SearchArea />
      </main>
    );
  }
}

export default App;
