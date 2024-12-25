import React from "react";

const HighlightText = ({ text, wordsToHighlight }) => {
  // Ensure wordsToHighlight is an object and not null or undefined
  const safeWordsToHighlight = wordsToHighlight || {};

  // Create a RegExp pattern from the object keys
  const regex = new RegExp(`(${Object.keys(safeWordsToHighlight).join("|")})`, "gi");

  const highlightedText = text.split(regex).map((part, index) => {
    const matchingWord = Object.keys(safeWordsToHighlight).find(
      (word) => word.toLowerCase() === part.toLowerCase()
    );

    if (matchingWord) {
      const link = safeWordsToHighlight[matchingWord];
      return link ? (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block text-gray-900 font-medium group"
          style={{
            position: "relative",
            fontWeight: "400",
            color: "#242323",
          }}
        >
         <span className="relative underline z-10">
          {part}
          </span>
          <span className="absolute inset-0 bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></span>
        </a>
      ) : (
        <span
          key={index}
          style={{
            position: "relative",
            fontWeight: "400",
            color: "#242323",
          }}
        >
          {part}
        </span>
      );
    }

    return part;
  });

  return (
    <div style={{ whiteSpace: "pre-line" }}>
      <p className="text-text">{highlightedText}</p>
    </div>
  );
};

export default HighlightText;