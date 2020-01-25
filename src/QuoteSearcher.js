import React, { Component } from "react";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: [],
    fetching: true,
    error: false,
    query: "",
    foundquotes: []
  };

  // Default quote function (Tree). (Step 1, 2, 3).
  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(results => results.json())
      .then(myJson => {
        const quoteData = myJson;
        console.log("logging raw quoteData", quoteData);
        const fetchedQuotes = quoteData.results;
        console.log("quote objects from the data", fetchedQuotes);
        this.updatingQuotes(fetchedQuotes);
      })
      // .catch(console.error);
      .catch(error =>
        this.setState({
          error: true
        })
      );
  }

  updatingQuotes(fetchedQuotes) {
    this.setState({
      quotes: fetchedQuotes,
      fetching: false
    });
    console.log("logging state", this.state.quotes);
  }

  renderQuote = quote => {
    return (
      <Quote quoteText={quote.quoteText} quoteAuthor={quote.quoteAuthor} />
    );
  };

  // Search functionality functions (step 6)
  inputChange = event => {
    event.preventDefault();
    console.log("Updating state property: ", this.state);
    this.setState({
      query: event.target.value
    });
  };

  submitSearch = event => {
    event.preventDefault();
    console.log("search submit button test");
    this.searchFetch();
  };

  searchFetch = () => {
    fetch(
      `https://quote-garden.herokuapp.com/quotes/search/${this.state.query}"`
    )
      .then(results => results.json())
      .then(myJson => {
        const quoteData = myJson;
        console.log("logging raw quoteData", quoteData);
        const newQuotes = quoteData.results;
        console.log("quote objects from the data", newQuotes);
        this.updatingFoundQuotes(newQuotes);
      })
      .catch(error =>
        this.setState({
          error: true
        })
      );
  };
  updatingFoundQuotes(newQuotes) {
    this.setState({
      foundquotes: newQuotes,
      fetching: false
    });
    console.log("logging state", this.state.foundquotes);
  }

  // render

  render() {
    const quotesCopy = [...this.state.quotes];
    console.log("checking content of state copy: ", quotesCopy);
    // this.state.quotes.map(quote.render);
    if (this.state.error === true) {
      return (
        <p>
          Error: unable to aquire data from server. Please check the console log
          in your developer tools for more information. Happy fixing
        </p>
      );
    } else if (this.state.fetching === false) {
      return (
        <div>
          <br></br>
          <form onSubmit={this.submitSearch}>
            <input
              placeholder="Input keyword here..."
              value={this.state.query}
              onChange={this.inputChange}
            ></input>
            <button onClick={this.submitSearch}>Search</button>
          </form>
          <br></br>
          <h2>Quotes</h2>
          {quotesCopy.map(this.renderQuote)}
        </div>
      );
    } else if (this.state.fetching) {
      return <p>Fetching data from server... Please wait</p>;
    }
  }
}

// Current problem: found quotes not passed to state

// TODO:
// Render foundquotes (after searching) on the page. Replace old quotes?
// pass 'key' property
