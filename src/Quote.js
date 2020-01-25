import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./styles/style.css";

export default class Quote extends Component {
  static propTypes = {
    // _id: PropTypes.number.isRequired,
    quoteText: PropTypes.string.isRequired,
    quoteAuthor: PropTypes.string.isRequired
  };
  state = {
    likeitornot: null
  };

  likeQuote() {
    console.log("testing like button click!");
  }
  unlikeQuote() {
    console.log("testing unlike button click!");
  }

  render() {
    // console.log("Prop test", this.props);
    return (
      <div>
        <p>{this.props.quoteText}</p>

        <p>By: {this.props.quoteAuthor}</p>
        <button onClick={this.likeQuote}>:D</button>

        <button onClick={this.unlikeQuote}>D:</button>
      </div>
    );
  }
}

// TODO: Optional css for buttons
// {/* <p classname ="{function to change color based on state}" */}

// steps:
// 2 buttons added to the render. DONE
// attach a css file for the two style options DONE
// event handler for both buttons, functions that console.log
// have event handlers change the local state
// on rendering, local state should determine which <p> class is used. null; no styling
//

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
