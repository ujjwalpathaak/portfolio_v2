import React from "react";

const TruncatedText = ({ text }) => {
    if (text.length > 600) {
        text = text.slice(0, 600) + "...";
    }
    
  const lines = text.split("\n");

  return (
    <div className="whitespace-pre-line">
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default TruncatedText;