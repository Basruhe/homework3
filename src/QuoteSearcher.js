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
    quotes: [
      {
        _id: "5d91b45d9980192a317c87f3",
        quoteText: "Doing nothing is better than being busy doing nothing.",
        quoteAuthor: "Lao Tzu"
      },
      {
        _id: "5d91b45d9980192a317c87fa",
        quoteText: "Work out your own salvation. Do not depend on others.",
        quoteAuthor: "Buddha"
      },
      {
        _id: "5d91b45d9980192a317c880c",
        quoteText: "A goal without a plan is just a wish.",
        quoteAuthor: "Larry Elder"
      },
      {
        _id: "5d91b45d9980192a317c87de",
        quoteText: "Difficulties increase the nearer we get to the goal.",
        quoteAuthor: "Johann Wolfgang von Goethe"
      },
      {
        _id: "5d91b45d9980192a317c87f8",
        quoteText: "Well done is better than well said.",
        quoteAuthor: "Benjamin Franklin"
      }
    ]
  };

  // todo: render function that maps this.state.quotes over quote.render. add return. then add quotesearcher to app.js

  renderQuote = quote => {
    return <Quote text={this.quoteText} author={this.quoteAuthor} />;
  };

  render() {
    const quotesCopy = [...this.state.quotes];
    console.log("checking state copy: ", quotesCopy);
    // this.state.quotes.map(quote.render);
    return (
      <div>
        <h2>Quotes</h2>
        <p>{quotesCopy.map(this.renderQuote)}</p>
      </div>
    );
  }
}

// render() {
//   console.log("render of scoreboard: ", this.state);
//   const players_copy = [...this.state.players];
//   players_copy.sort((a, b) => b.score - a.score);

//   return (
//     <div className="scoreboard">
//       <h1>Scoreboard</h1>
//       <ul>{players_copy.map(this.renderPlayer)}</ul>
//     </div>
//   );
// }

// renderPlayer = player => {
//   return (
//     <Player
//       id={player.id}
//       name={player.name}
//       score={player.score}
//       key={player.id}
//       incrementScore={this.IncrementScoreOfPlayer}
//     />
//   );
// };
