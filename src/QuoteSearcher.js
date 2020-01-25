import React, { Component } from "react";
import PropTypes from "prop-types";

export default class QuoteSearcher extends Component {
  static propTypes = {
    _id: PropTypes.number.isRequired,
    quoteText: PropTypes.string.isRequired,
    quoteAuthor: PropTypes.string.isRequired
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
      },
      {
        _id: "5d91b45d9980192a317c87fc",
        quoteText: "Once you choose hope, anythings possible.",
        quoteAuthor: "Christopher Reeve"
      },
      {
        _id: "5d91b45d9980192a317c87ff",
        quoteText: "From small beginnings come great things.",
        quoteAuthor: ""
      },
      {
        _id: "5d91b45d9980192a317c8814",
        quoteText: "Love is the flower you've got to let grow.",
        quoteAuthor: "John Lennon"
      },
      {
        _id: "5d91b45d9980192a317c87f0",
        quoteText: "A rolling stone gathers no moss.",
        quoteAuthor: "Publilius Syrus"
      },
      {
        _id: "5d91b45d9980192a317c87f9",
        quoteText: "Bite off more than you can chew, then chew it.",
        quoteAuthor: "Ella Williams"
      },
      {
        _id: "5d91b45d9980192a317c8806",
        quoteText: "Goals are the fuel in the furnace of achievement.",
        quoteAuthor: "Brian Tracy"
      },
      {
        _id: "5d91b45d9980192a317c87dc",
        quoteText: "You can observe a lot just by watching.",
        quoteAuthor: "Yogi Berra"
      },
      {
        _id: "5d91b45d9980192a317c87f6",
        quoteText: "The day is already blessed, find peace within it.",
        quoteAuthor: ""
      },
      {
        _id: "5d91b45d9980192a317c87e2",
        quoteText: "Well begun is half done.",
        quoteAuthor: "Aristotle"
      },
      {
        _id: "5d91b45d9980192a317c87e1",
        quoteText: "Nothing happens unless first we dream.",
        quoteAuthor: "Carl Sandburg"
      },
      {
        _id: "5d91b45d9980192a317c87ed",
        quoteText: "To lead people walk behind them.",
        quoteAuthor: "Lao Tzu"
      },
      {
        _id: "5d91b45d9980192a317c8809",
        quoteText: "Talk doesn't cook rice.",
        quoteAuthor: "Chinese proverb"
      },
      {
        _id: "5d91b45d9980192a317c87e9",
        quoteText: "You'll see it when you believe it.",
        quoteAuthor: "Wayne Dyer"
      },
      {
        _id: "5d91b45d9980192a317c8808",
        quoteText: "Be kind whenever possible. It is always possible.",
        quoteAuthor: "Dalai Lama"
      },
      {
        _id: "5d91b45d9980192a317c880d",
        quoteText: "To succeed, we must first believe that we can.",
        quoteAuthor: "Michael Korda"
      },
      {
        _id: "5d91b45d9980192a317c8816",
        quoteText: "One fails forward toward success.",
        quoteAuthor: "Charles Kettering"
      },
      {
        _id: "5d91b45d9980192a317c87f5",
        quoteText: "Study the past, if you would divine the future.",
        quoteAuthor: "Confucius"
      },
      {
        _id: "5d91b45d9980192a317c8804",
        quoteText: "What worries you masters you.",
        quoteAuthor: "Haddon Robinson"
      }
    ]
  };
}
