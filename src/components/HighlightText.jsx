import React from "react";

const HighlightText = ({ text, wordsToHighlight }) => {
  // Ensure wordsToHighlight is an object and not null or undefined
  const safeWordsToHighlight = wordsToHighlight || {};

  // Create a RegExp pattern from the object keys
  const regex = new RegExp(
    `(${Object.keys(safeWordsToHighlight).join("|")})`,
    "gi",
  );

  const highlightedText = text.split(regex).map((part, index) => {
    const matchingWord = Object.keys(safeWordsToHighlight).find(
      (word) => word.toLowerCase() === part.toLowerCase(),
    );

    if (matchingWord) {
      const link = safeWordsToHighlight[matchingWord];
      return link ? (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative font-medium text-gray-900"
          style={{
            position: "relative",
            fontWeight: "400",
            color: "#242323",
          }}
        >
          <span className="relative z-10 underline">{part}</span>
          <span className="absolute inset-0 z-0 origin-left scale-x-0 transform bg-yellow-300 transition-transform duration-300 group-hover:scale-x-100"></span>
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
      <p className="break-all text-text lg:break-normal">{highlightedText}</p>
    </div>
  );
};

export default HighlightText;
