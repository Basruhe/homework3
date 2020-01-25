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
    quotes: [],
    fetching: true,
    error: false
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
          <h2>Quotes</h2>
          {quotesCopy.map(this.renderQuote)}
        </div>
      );
    } else if (this.state.fetching) {
      return <p>Fetching data from server... Please wait</p>;
    }
  }
}

// TODO: pass 'key' property

// Instructions
// ### Step 4. Add a "like" / "dislike" feature to the quotes
// ​
// You might like some quotes and dislike others. We're going to add a feature that records whether you do or do not. For this step, we've going to keep the state local to the `Quote` component.
// ​
// - Add two `<button>`s, for example `:)` and `:(` or `like` and `dislike`, so that the page looks like this:
// ​
//   ![](https://p18.f3.n0.cdn.getcloudapp.com/items/04uk2vJO/Image+2019-10-24+at+10.04.48+PM.png)
// ​
// - By using a new property in component local state, and the `onClick` attribute of the buttons, make it so that a user can like or dislike a quote. This liking or disliking should change the way the quote looks. For example, you can use the `style` attribute, and conditionally apply some CSS styles, like so: `style={{ fontWeight: "bold" }}`.
// - The result may look something like this:
// ​
//   ![](https://p18.f3.n0.cdn.getcloudapp.com/items/wbue6LqB/Screen+Recording+2019-10-24+at+10.12+PM.gif)
// ​
