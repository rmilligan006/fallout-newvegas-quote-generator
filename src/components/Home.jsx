import React, { Component } from "react";
import quotes from "../assets/data";
import QuoteAndAuthor from "./quoteAndAuthor";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
      image: quotes[0].image,
    };
  }
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }
  shuffleQuotes(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author,
      image: generateRandomQuote.image,
    });
  };

  render() {
    return (
      <div>
        <QuoteAndAuthor
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default Home;
