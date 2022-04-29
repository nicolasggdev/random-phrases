import React from "react";
import { useState } from "react";

// Styles
import "./QuoteBox.styles.css";

// Components
import Author from "../Author/Author.jsx";
import Button from "../Button/Button.jsx";
import Phrase from "../Phrase/Phrase.jsx";

// Database
import quotes from "../../quotes.json";

const QuoteBox = ({ color, randomColor }) => {
  // Hooks
  const [phrase, setPhrase] = useState(0);
  const [author, setAuthor] = useState(0);

  const firstPhrase = quotes[0].quote;
  const firtsAuthor = quotes[0].author;

  const position = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    setPhrase(quotes[randomNumber].quote);
    setAuthor(quotes[randomNumber].author);
  };

  return (
    <div className="Quote-Box">
      <Phrase phrase={phrase} color={color} firstPhrase={firstPhrase} />
      <Author author={author} color={color} firtsAuthor={firtsAuthor} />
      <Button position={position} randomColor={randomColor} color={color} />
    </div>
  );
};

export default QuoteBox;
