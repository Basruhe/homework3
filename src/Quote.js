import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Quote extends Component {
  static propTypes = {
    _id: PropTypes.number.isRequired,
    quoteText: PropTypes.string.isRequired,
    quoteAuthor: PropTypes.string.isRequired
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.quoteText}</p>
        <p>By: {this.props.quoteAuthor}</p>
      </div>
    );
  }
}
