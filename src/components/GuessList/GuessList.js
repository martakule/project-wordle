import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

const rows = range(NUM_OF_GUESSES_ALLOWED);

function GuessList({ guesses }) {
  return (
    <div className="guess-results">
      {rows.map((_, index) => (
        <Guess word={guesses[index]} key={index} />
      ))}
    </div>
  );
}

export default GuessList;
