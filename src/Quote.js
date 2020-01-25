import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./styles/style.css";

export default class Quote extends Component {
  static propTypes = {
    quoteText: PropTypes.string.isRequired,
    quoteAuthor: PropTypes.string.isRequired
  };
  state = {
    likeitornot: null
  };

  likeSwitch = () => {
    console.log("before", this.state);
    const trueState = this.likeitornot === true ? true : true;
    this.setState({ likeitornot: trueState });
    console.log("after", this.state);
  };

  dislikeSwitch = () => {
    console.log("before", this.state);
    const falseState = this.likeitornot === true ? false : false;
    this.setState({ likeitornot: falseState });
    console.log("after", this.state);
  };

  render() {
    // console.log("Prop test", this.props);
    let likeColors = this.state.likeitornot ? "bluequote" : "redquote";
    return (
      <div>
        <p className={likeColors}>{this.props.quoteText}</p>

        <p>By: {this.props.quoteAuthor}</p>
        <button onClick={this.likeSwitch}>:D</button>

        <button onClick={this.dislikeSwitch}>D:</button>
      </div>
    );
  }
}

// Todo:
// Add ID proptype, key property?
// Page starts with coloured quotes when the state is 'null'. Null is treated as a boolean? Requires fix
// Repeated button clicks result in 'null' states. Requires fix
