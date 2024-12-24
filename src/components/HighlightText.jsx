import React from "react";

const HighlightText = ({ text, wordsToHighlight }) => {
  const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");

  const highlightedText = text.split(regex).map((part, index) => {
    return wordsToHighlight.some(
      (word) => word.toLowerCase() === part.toLowerCase(),
    ) ? (
      <span
        key={index}
        style={{
          fontWeight: "400",
          color: "#242323",
        }}
      >
        {part}
      </span>
    ) : (
      part
    );
  });

  return (
    <div style={{ whiteSpace: "pre-line" }}>
      <p className="text-text">{highlightedText}</p>
    </div>
  );
};

export default HighlightText;
