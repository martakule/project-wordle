import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  const cells = word ? checkGuess(word, answer) : range(5).map(() => "");
  return (
    <p className="guess">
      {cells.map((letter, index) => (
        <span key={index} className={`cell ${letter.status || ""}`}>
          {letter.letter || ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
