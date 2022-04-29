import React from "react";

// Styles
import "./Author.styles.css";

const Author = ({ author, color, firtsAuthor }) => {
  const style = {
    color: color,
  };

  return (
    <div className="author-container">
      <p style={style}>
        <i>{author === 0 ? firtsAuthor : author}</i>
      </p>
    </div>
  );
};

export default Author;
