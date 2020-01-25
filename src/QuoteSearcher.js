import React, { Component } from "react";
// import PropTypes from "prop-types";
import Quote from "./Quote";

export default class QuoteSearcher extends Component {
  static propTypes = {
    // _id: PropTypes.number.isRequired,
    // quoteText: PropTypes.string.isRequired,
    // quoteAuthor: PropTypes.string.isRequired
  };
  state = {
    quotes: []
  };

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
      .catch(console.error);
  }

  updatingQuotes(fetchedQuotes) {
    this.setState({
      quotes: fetchedQuotes
    });
    console.log("logging state", this.state.quotes);
  }

  renderQuote = quote => {
    return (
      <Quote quoteText={quote.quoteText} quoteAuthor={quote.quoteAuthor} />
    );
  };

  render() {
    const quotesCopy = [...this.state.quotes];
    console.log("checking content of state copy: ", quotesCopy);
    // this.state.quotes.map(quote.render);
    return (
      <div>
        <h2>Quotes</h2>
        <p>{quotesCopy.map(this.renderQuote)}</p>
      </div>
    );
  }
}

// Now, let's make the `QuoteSearcher` component dynamically fetch qutoes from the API. We will be using the "search" endpoint at `https://quote-garden.herokuapp.com/quotes/search/:keyword`. For example, here are the results for "tree": https://quote-garden.herokuapp.com/quotes/search/tree.
// ​
// - Change the initial state of the `QuoteSearcher` component to have an empty list of quotes. That is,
// ​
//   ```ts
//   state = {
//     quotes: []
//   }
//   ```
// ​
// - Add the `componentDidMount` lifecycle method to the component, and in it add a `fetch` call to https://quote-garden.herokuapp.com/quotes/search/tree, to fetch all the quotes that contain the keyword "tree".
// - When the data arrives, assign it (correctly) to component local state, so that the component automatically rerenders and displays all the found qoutes.
// - Add an extra (boolean) state property called `fetching`, and (re-)assign it as necessary in `componentDidMount` so that the component knows when it is fetching data.
// - In the `render()` method, use that state property to conditionally show a "Loading..." text instead of the quotes when fetching. The result may look something like this:
