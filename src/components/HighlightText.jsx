import React from "react";

const HighlightText = ({ text, wordsToHighlight }) => {
  const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");

  const highlightedText = text.split(regex).map((part, index) => {
    return wordsToHighlight.some(
      (word) => word.toLowerCase() === part.toLowerCase(),
    ) ? (
      <span key={index} style={{ color: "white", textDecoration: "underline" }}>
        {part}
      </span>
    ) : (
      part
    );
  });

  return <p>{highlightedText}</p>;
};

export default HighlightText;
