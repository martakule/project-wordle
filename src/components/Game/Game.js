import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordInput from "../WordInput";
import GuessList from "../GuessList";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState(null);
  const addGuess = (guess) => {
    const nexGuesses = [...guesses, guess];
    setGuesses(nexGuesses);
    // End game
    if (guess === answer) {
      setStatus("happy");
    } else if (nexGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("sad");
    }
  };
  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <WordInput addGuess={addGuess} disabled={status !== null} />
      {status && (
        <Banner status={status} guesses={guesses.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
