import React, { Component } from "react";
import QuoteSearcher from "./QuoteSearcher";
import PropTypes from "prop-types";

export default class Quote extends Component {
  static propTypes = {
    _id: PropTypes.number.isRequired,
    quoteText: PropTypes.string.isRequired,
    quoteAuthor: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <h2>Quotes</h2>
        <p>{this.props.text}</p>
        <p>By: {this.props.author}</p>
      </div>
    );
  }
}
