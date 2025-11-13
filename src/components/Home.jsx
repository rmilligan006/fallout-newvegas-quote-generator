import { useState } from "react";
import quotes from "../assets/data";
import QuoteAndAuthor from "./quoteAndAuthor";

const Home = () => {
  const getRandomQuote = () =>
    quotes[Math.floor(Math.random() * quotes.length)];

  const [quoteData, setQuoteData] = useState(getRandomQuote());

  const handleClick = () => {
    setQuoteData(getRandomQuote());
  };

  return (
    <div>
      <QuoteAndAuthor {...quoteData} handleClick={handleClick} />
    </div>
  );
};

export default Home;
