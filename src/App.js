import React, { Component } from "react";
import "./App.css";
import QuoteSearcher from "./QuoteSearcher";
import Quote from "./Quote";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <p>File initiation Test</p>
        <QuoteSearcher />
      </div>
    );
  }

  // export default App;
}
