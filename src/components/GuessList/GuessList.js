import React from "react";

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ word, id }) => (
        <p key={id} className="guess">
          {word}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
