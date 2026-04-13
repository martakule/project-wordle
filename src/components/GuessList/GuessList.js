import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

const rows = range(NUM_OF_GUESSES_ALLOWED);

function GuessList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {rows.map((num) => (
        <Guess word={guesses[num]} key={num} answer={answer} />
      ))}
    </div>
  );
}

export default GuessList;
