import React, { Component } from "react";
import "./App.css";
import QuoteSearcher from "./QuoteSearcher";
import Quote from "./Quote";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteSearcher />
      </div>
    );
  }

  // export default App;
}
