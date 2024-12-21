import React from "react";

const HighlightText = ({ text, wordsToHighlight }) => {
  const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");

  const highlightedText = text.split(regex).map((part, index) => {
    return wordsToHighlight.some(
      (word) => word.toLowerCase() === part.toLowerCase(),
    ) ? (
      <span key={index} style={{ color: "#c5cbd6" }}>
        {part}
      </span>
    ) : (
      part
    );
  });

  return <p className="text-text" >{highlightedText}</p>;
};

export default HighlightText;
